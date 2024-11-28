import { ReactNode } from "react";
import classnames from "classnames";

export type StackProps = {
	
	children: ReactNode | ReactNode[];
	className?: string;
};

export function Stack({ children, className }: StackProps) {
	const baseClassname = "stack";
	const classNames = classnames(baseClassname, className);

	return <div className={classNames}>{children}</div>;
}
