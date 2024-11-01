import classnames from "classnames";
import { ReactNode } from "react";
import { AccordionContext, AccordionProvider } from "./Accordion.provider";
import { AccordionItem } from "./AccordionItem/AccordionItem";
import { AccordionTrigger } from "./AccordionTrigger/AccordionTrigger";

export type AccordionProps = {
	className?: string;
	children: ReactNode;
};

export function Accordion({ className, children }: AccordionProps) {
	const baseClassName = "accordion";
	const classNames = classnames(baseClassName, className);

	return (
		<AccordionProvider>
			<div className={classNames}>{children}</div>
		</AccordionProvider>
	);
}

Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContext;

