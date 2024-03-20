import { ReactNode } from "react";

export type ButtonGroupProps = {
	children: ReactNode | ReactNode[];
};

export function ButtonGroup({ children }: ButtonGroupProps) {
	return <div className="button-group">{children}</div>;
}
