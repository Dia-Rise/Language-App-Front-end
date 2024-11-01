import { ReactNode, useEffect, useRef } from "react";
import classnames from "classnames";
import { useAccordionItem } from "../AccordionItem/AccordionItem.provider";
import { reflow } from "../../../utilities/reflow";

export type AccordionContentProps = {
	className?: string;
	children: ReactNode;
};

export function AccordionContent({ children, className }: AccordionContentProps) {
	const { isOpen, isAnimating, setIsAnimating } = useAccordionItem();
	const contentWrapperRef = useRef<HTMLDivElement>(null);
	const componentWrapperRef = useRef<HTMLDivElement>(null);

	const transitionDuration = 250;

	function getWrapperSize() {
		return contentWrapperRef.current ? contentWrapperRef.current.clientHeight : 0;
	}

	function handleOpen(node: HTMLDivElement) {
		if (isAnimating) return;

		const wrapperHeight = getWrapperSize();
		node.style.height = "0px";

		setIsAnimating(true);

		function complete() {
			setIsAnimating(false);
			node.style.height = `auto`;
		}

		setTimeout(complete, transitionDuration);

		node.style.height = `${wrapperHeight}px`;
	}

	function handleClose(node: HTMLDivElement) {
		if (isAnimating) return;

		const wrapperHeight = getWrapperSize();
		node.style.height = `${wrapperHeight}px`;

		reflow(node);
		setIsAnimating(true);

		function complete() {
			setIsAnimating(false);
		}

		setTimeout(complete, transitionDuration);

		node.style.height = `0px`;
	}

	useEffect(() => {
		if (!componentWrapperRef.current) return;
		isOpen ? handleOpen(componentWrapperRef.current) : handleClose(componentWrapperRef.current);
	}, [isOpen]);

	const baseClassName = "accordion-content";
	const classNames = classnames(baseClassName, className);

	return (
		<div
			className={classNames}
			ref={componentWrapperRef}
			style={{ height: 0, transition: `height ${transitionDuration}ms ease-in-out` }}
		>
			<div ref={contentWrapperRef} className={`${baseClassName}__wrapper`}>
				{children}
			</div>
		</div>
	);
}
