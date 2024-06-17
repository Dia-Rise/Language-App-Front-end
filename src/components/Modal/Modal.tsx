import { ReactNode, RefObject, useRef, MouseEvent } from "react";
import { Icon, IconSVG } from "../Icon/Icon";
import { createPortal } from "react-dom";

export type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
	disableBackdropClose?: boolean;
	className?: string;
};

export function Modal({ isOpen, onClose, disableBackdropClose, children, className = "" }: ModalProps) {
	const backdropRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

	/* 
		! This only works if there is always going to be one modal open at a time. 
		TODO: In future create hook that can track if a body is currently open. 
	*/
	function onBackdropClick({ target }: MouseEvent<HTMLDivElement>) {
		if (!disableBackdropClose && target === backdropRef.current) onClose();
	}

	const component = isOpen && (
		<>
			<div className="backdrop" ref={backdropRef} onClick={onBackdropClick}></div>
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
