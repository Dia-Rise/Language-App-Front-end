import classnames from "classnames";
import { Icon, IconSize, IconSVG } from "../../components";

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
	className?: string;
};

export function MegaButton({ icon, label, subLabel, color, className = "" }: MegaButtonProps) {
	const baseClassName = `mega-button`;
	const classNames = classnames(baseClassName, color, className);

	return (
		<button className={classNames}>
			<Icon className={`${baseClassName}__icon`} svg={icon} size={IconSize.XXL} />
			<div className={`${baseClassName}__label-container`}>
				<span className={`${baseClassName}__label`}>{label}</span>
				<span className={`${baseClassName}__sub-label`}>{subLabel}</span>
			</div>
		</button>
	);
}
