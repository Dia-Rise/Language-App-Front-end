import { ReactNode } from "react";
import { Position } from "../../enums";
import { Icon, IconSVG } from "../Icon/Icon";

export type ModalProps = {
	position?: Position;
	isVisable: boolean;
	onClose: () => void;
	children: ReactNode;
	className?: string;
};

export function Modal({ position = Position.Center, isVisable, onClose, children, className = "" }: ModalProps) {
	return (
		<>
			{isVisable && (
				<div className={`modal modal--${position} ${className}`}>
					<button className="modal__close" onClick={() => onClose()}>
						<Icon svg={IconSVG.Cross} />
					</button>
					<div className="modal__content">{children}</div>
				</div>
			)}
		</>
	);
}
