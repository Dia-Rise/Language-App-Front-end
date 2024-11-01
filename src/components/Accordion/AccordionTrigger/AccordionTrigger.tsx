import { MouseEvent, ReactNode } from "react";
import classnames from "classnames";
import { useAccordionItem } from "../AccordionItem/AccordionItem.provider";
import { useAccordion } from "../Accordion.provider";
import { Icon, IconSize, IconSVG } from "../../Icon/Icon";

export type AccordionTriggerProps = {
	className?: string;
	onClick?: () => void;
	children: ReactNode;
	hasIcon?: boolean;
};

export function AccordionTrigger({ onClick = () => {}, children, hasIcon = true, className }: AccordionTriggerProps) {
	const { toggleOpenedItem } = useAccordion();
	const { id, disabled, readOnly, isOpen, isAnimating } = useAccordionItem();

	const baseClassName = "accordion-trigger";
	const classNames = classnames(baseClassName, {
		[`${baseClassName}--active`]: isOpen,
		[`${baseClassName}--read-only`]: readOnly,
		[`${baseClassName}--disabled`]: disabled,
	});

	function handleOnClick(e: MouseEvent<HTMLButtonElement>) {
		e.preventDefault();

		if (!disabled && !readOnly && !isAnimating) {
			toggleOpenedItem(id);
			onClick();
		}
	}

	return (
		<button
			className={classNames}
			onClick={handleOnClick}
			aria-readonly={readOnly}
			aria-disabled={disabled}
			{...{ disabled }}
		>
			<div className={classnames(`${baseClassName}__content`, className)}>{children}</div>
			{hasIcon && (
				<Icon
					className={`${baseClassName}__icon`}
					svg={isOpen ? IconSVG.Chevron_up : IconSVG.Chevron_down}
					size={IconSize.XS}
				/>
			)}
		</button>
	);
}
