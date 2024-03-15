import { ReactNode } from "react";

export enum ActionVariant {
	Standard = "action--standard",
	Text = "action--text",
	oultine = "action--outline",
}

export enum ActionSize {
	SM = "action--small",
	MD = "action--medium",
	LG = "action--large",
}

export enum ActionColors {
	Primary = "action--primary",
	Secondary = "action--secondary",
	Error = "action--error",
	Warning = "action--warning",
	Success = "action--success",
	Info = "action--info",
	Light = "action--light",
	Dark = "action--dark",
}

type ActionFunctionType =
	| {
			onClick: () => void;
			href?: never;
	  }
	| {
			onClick?: never;
			href: string;
	  };

type ActionCommonProps = {
	variant?: ActionVariant;
	color?: ActionColors;
	size?: ActionSize;
	disabled?: boolean;
	children: ReactNode;
	className?: string;
};

export type ActionProps = ActionCommonProps & ActionFunctionType;

export function Action({
	variant = ActionVariant.Standard,
	color = ActionColors.Light,
	size = ActionSize.MD,
	disabled,
	onClick,
	href,
	children,
	className = "",
}: ActionProps) {
	return href ? (
		<a className={`action ${variant} ${color} ${size} ${className}`} {...{ disabled, href }}>
			{children}
		</a>
	) : (
		<button className={`action ${variant} ${color} ${size} ${className}`} {...{ disabled, onClick }}>
			{children}
		</button>
	);
}
