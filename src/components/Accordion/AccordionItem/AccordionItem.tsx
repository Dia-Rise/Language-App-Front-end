import classnames from "classnames";
import { ReactNode } from "react";
import { AccordionItemProvider } from "./AccordionItem.provider";
import { useAccordion } from "../Accordion.provider";

export type AccordionItemProps = {
	id: string;
	disabled?: boolean;
	readOnly?: boolean;
	className?: string;
	children: ReactNode;
};

export function AccordionItem({ id, disabled, readOnly, className, children }: AccordionItemProps) {
	const { openedItems } = useAccordion();
	const isOpen = (id && openedItems.includes(id)) || false;

	const baseClassName = "accordion-item";
	const classNames = classnames(baseClassName, className);

	return (
		<AccordionItemProvider {...{ id, disabled, readOnly, isOpen }}>
			<div className={classNames}>{children}</div>
		</AccordionItemProvider>
	);
}
