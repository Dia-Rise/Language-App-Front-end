import classnames from "classnames";
import { Icon, IconSize, IconSVG } from "../../components";
import { NavLink } from "react-router-dom";

//TODO - In future add way to add custom colors
export enum MegaButtonColor {
	Orange = "mega-button--orange",
	Pink = "mega-button--pink",
	Blue = "mega-button--blue",
	Red = "mega-button--red",
	Yelllow = "mega-button--yellow",
	Green = "mega-button--green",
}

export type MegaButtonProps = {
	icon: IconSVG;
	label: string;
	subLabel: string;
	color: MegaButtonColor;
	href: string;
	className?: string;
};

export function MegaButton({ icon, label, subLabel, color, href, className = "" }: MegaButtonProps) {
	const baseClassName = `mega-button`;
	const classNames = classnames(baseClassName, color, className);

	return (
		<NavLink className={classNames} to={href}>
			<Icon className={`${baseClassName}__icon`} svg={icon} size={IconSize.XXL} />
			<div className={`${baseClassName}__label-container`}>
				<span className={`${baseClassName}__label`}>{label}</span>
				<span className={`${baseClassName}__sub-label`}>{subLabel}</span>
			</div>
		</NavLink>
	);
}
