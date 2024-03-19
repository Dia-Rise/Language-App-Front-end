import { ReactNode } from "react";

export type ActionGroupProps = {
	children: ReactNode | ReactNode[];
};

export function ActionGroup({ children }: ActionGroupProps) {
	return <div className="action-group">{children}</div>;
}
