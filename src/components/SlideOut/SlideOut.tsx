import { ReactNode } from "react";

export enum SlideOutDirection {
	Left = "slide-out--left",
	Right = "slide-out--right",
}

export type SlideOutProps = {
	children: ReactNode;
	isOpen: boolean;
	direction?: SlideOutDirection;
	className?: string;
};

export function SlideOut({ children, isOpen, direction = SlideOutDirection.Right, className = "" }: SlideOutProps) {
	return (
		<div className={`slide-out ${direction} ${isOpen ? "slide-out--active" : ""}`}>
			<div className={`slide-out__container ${className}`}>{children}</div>
		</div>
	);
}
