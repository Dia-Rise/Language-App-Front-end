import { ReactNode, MouseEvent } from "react";
import { Link, NavLink } from "react-router-dom";

export enum ButtonVariant {
	Button = "Button",
	Link = "Link",
	ReactRouterLink = "ReactRouterLink",
	ReactRouterNavLink = "ReactRouterNavLink",
}

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
	White = "button--white",
	Black = "button--black",
}

type ButtonCommonProps = {
	color?: ButtonColors;
	disabled?: boolean;
	active?: boolean;
	children: ReactNode;
	className?: string;
};

type ButtonVariantProps =
	| {
			variant: ButtonVariant.Button;
			onClick: (event: MouseEvent<HTMLButtonElement>) => void;
			href?: string;
	  }
	| {
			variant: Exclude<ButtonVariant, ButtonVariant.Button>;
			onClick?: never;
			href: string;
	  };

type ButtonSizeTypes =
	| {
			appearance?: ButtonAppearance.Text;
			size?: never;
	  }
	| {
			appearance?: Exclude<ButtonAppearance, ButtonAppearance.Text>;
			size?: ButtonSize;
	  };

export type ButtonProps = ButtonCommonProps & ButtonVariantProps & ButtonSizeTypes;

export function Button({
	variant,
	appearance = ButtonAppearance.Standard,
	color = ButtonColors.Light,
	size = ButtonSize.SM,
	disabled,
	active,
	onClick,
	href,
	children,
	className = "",
}: ButtonProps) {
	switch (variant) {
		case ButtonVariant.Button:
			return (
				<button
					className={`button ${appearance} ${color} ${appearance != ButtonAppearance.Text ? size : ""} ${active ? "button--active" : ""} ${className}`}
					{...{ disabled, onClick }}
				>
					{children}
				</button>
			);
		case ButtonVariant.ReactRouterLink:
			return (
				<Link
					to={href}
					className={`button ${appearance} ${color} ${appearance != ButtonAppearance.Text ? size : ""} ${active ? "button--active" : ""} ${className}`}
					{...{ disabled, onClick }}
				>
					{children}
				</Link>
			);
		case ButtonVariant.ReactRouterNavLink:
			return (
				<NavLink
					to={href}
					className={`button ${appearance} ${color} ${appearance != ButtonAppearance.Text ? size : ""} ${active ? "button--active" : ""} ${className}`}
					{...{ disabled }}
				>
					{children}
				</NavLink>
			);
		case ButtonVariant.Link:
			return (
				<a
					className={`button ${appearance} ${color} ${appearance != ButtonAppearance.Text ? size : ""} ${active ? "button--active" : ""} ${className}`}
					{...{ disabled, href }}
				>
					{children}
				</a>
			);
	}
}
