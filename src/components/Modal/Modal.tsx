import { ReactNode } from "react";
import { Icon, IconSVG } from "../Icon/Icon";
import { createPortal } from "react-dom";
import { Backdrop } from "../Backdrop/Backdrop";

export type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
	disableBackdropClose?: boolean;
	className?: string;
};

export function Modal({ isOpen, onClose, disableBackdropClose, children, className = "" }: ModalProps) {
	function onBackdropClick() {
		if (!disableBackdropClose) onClose();
	}

	const component = isOpen && (
		<>
			<Backdrop isVisible={true} onClick={() => onBackdropClick()} />
			<div className={`modal ${className}`}>
				<button className="modal__close" onClick={() => onClose()}>
					<Icon svg={IconSVG.Cross} />
				</button>
				<div className="modal__content">{children}</div>
			</div>
		</>
	);

	return createPortal(component, document.body);
}
