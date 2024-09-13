import { ReactNode, MouseEvent } from "react";
import { Link, NavLink } from "react-router-dom";
import classnames from "classnames";

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
	XS = "button--extra-small",
	SM = "button--small",
	MD = "button--medium",
	LG = "button--large",
}

export enum ButtonShape {
	Circular = "button--circular",
	Soft = "button--soft",
	Sharp = "button--sharp",
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
			shape?: never;
	  }
	| {
			appearance?: Exclude<ButtonAppearance, ButtonAppearance.Text>;
			size?: ButtonSize;
			shape?: ButtonShape;
	  };

export type ButtonProps = ButtonCommonProps & ButtonVariantProps & ButtonSizeTypes;

export function Button({
	variant,
	appearance = ButtonAppearance.Standard,
	color = ButtonColors.Light,
	size = ButtonSize.SM,
	shape = ButtonShape.Circular,
	disabled,
	active,
	onClick,
	href,
	children,
	className = "",
}: ButtonProps) {
	const baseClassname = "button";
	const classNames = classnames(
		baseClassname,
		appearance,
		color,
		{
			[size]: appearance != ButtonAppearance.Text,
			[shape]: appearance != ButtonAppearance.Text,
			[`${baseClassname}--active`]: active,
			[`${baseClassname}--disabled`]: disabled,
		},
		className
	);

	switch (variant) {
		case ButtonVariant.Button:
			return (
				<button className={classNames} {...{ disabled, onClick }}>
					{children}
				</button>
			);
		case ButtonVariant.ReactRouterLink:
			return (
				<Link to={href} className={classNames} {...{ disabled, onClick }}>
					{children}
				</Link>
			);
		case ButtonVariant.ReactRouterNavLink:
			return (
				<NavLink to={href} className={classNames} {...{ disabled }}>
					{children}
				</NavLink>
			);
		case ButtonVariant.Link:
			return (
				<a className={classNames} {...{ disabled, href }}>
					{children}
				</a>
			);
	}
}
