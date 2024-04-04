import { ReactNode } from "react";
import { Icon, IconSVG } from "../Icon/Icon";

export type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
	className?: string;
};

export function Modal({ isOpen, onClose, children, className = "" }: ModalProps) {
	return (
		<>
			{isOpen && (
				<div className={`modal ${className}`}>
					<button className="modal__close" onClick={() => onClose()}>
						<Icon svg={IconSVG.Cross} />
					</button>
					<div className="modal__content">{children}</div>
				</div>
			)}
		</>
	);
}
