import { ReactNode } from "react";

export enum ButtonAppearance {
	Standard = "",
	Text = "button--text",
	Oultine = "button--outline",
}

export enum ButtonSize {
	SM = "button--small",
	MD = "button--medium",
	LG = "button--large",
}

export enum ButtonColors {
	Primary = "button--primary",
	Secondary = "button--secondary",
	Error = "button--error",
	Warning = "button--warning",
	Success = "button--success",
	Info = "button--info",
	Light = "button--light",
	Dark = "button--dark",
}

export type ButtonProps = {
	appearance?: ButtonAppearance;
	color?: ButtonColors;
	size?: ButtonSize;
	disabled?: boolean;
	active?: boolean;
	onClick: () => void;
	children: ReactNode;
	className?: string;
};

export function Button({
	appearance = ButtonAppearance.Standard,
	color = ButtonColors.Light,
	size = ButtonSize.SM,
	disabled,
	active,
	onClick,
	children,
	className = "",
}: ButtonProps) {
	return (
		<button
			className={`button ${appearance} ${color} ${size} ${active ? "button--active" : ""} ${className}`}
			{...{ disabled, onClick }}
		>
			{children}
		</button>
	);
}
