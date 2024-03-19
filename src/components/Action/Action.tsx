import { ReactNode } from "react";

export enum ActionVariant {
	Button = "button",
	Toggle = "toggle",
	Link = "link",
}

export enum ActionAppearance {
	Standard = "action--standard",
	Text = "action--text",
	Oultine = "action--outline",
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

type ActionVariantType =
	| {
			variant: ActionVariant.Button;
			onClick: () => void;
			active?: never;
			href?: never;
	  }
	| {
			variant: ActionVariant.Link;
			onClick?: never;
			active?: never;
			href: string;
	  }
	| {
			variant: ActionVariant.Toggle;
			onClick: () => void;
			active?: boolean;
			href?: string;
	  };

type ActionCommonProps = {
	appearance?: ActionAppearance;
	color?: ActionColors;
	size?: ActionSize;
	disabled?: boolean;
	active?: boolean;
	children: ReactNode;
	className?: string;
};

export type ActionProps = ActionCommonProps & ActionVariantType;

export function Action({
	variant,
	appearance = ActionAppearance.Standard,
	color = ActionColors.Light,
	size = ActionSize.MD,
	disabled,
	active,
	onClick,
	href,
	children,
	className = "",
}: ActionProps) {
	return variant === ActionVariant.Link ? (
		<a
			className={`action ${appearance} ${color} ${size} ${active ? "action--active" : ""} ${className}`}
			{...{ disabled, href }}
		>
			{children}
		</a>
	) : (
		<button
			className={`action ${appearance} ${color} ${size} ${variant === ActionVariant.Toggle ? "action--toggle" : ""} ${active ? "action--active" : ""} ${className}`}
			{...{ disabled, onClick }}
		>
			{children}
		</button>
	);
}
