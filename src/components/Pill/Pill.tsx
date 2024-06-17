import { Icon, IconSize, IconSVG } from "../Icon/Icon";

export enum PillColors {
	Primary = "pill--primary",
	Secondary = "pill--secondary",
	Error = "pill--error",
	Warning = "pill--warning",
	Success = "pill--success",
	Info = "pill--info",
	Light = "pill--light",
	Dark = "pill--dark",
}

export type PillProps = {
    label: string;
	color: PillColors;
    icon?: IconSVG;
	className?: string;
};

export function Pill({ label, color, icon, className = "" }: PillProps) {
	return (
		<div className={`pill ${color} ${className}`}>
            {icon && <Icon className="pill__icon" svg={icon} size={IconSize.XS} />}
            <span className="pill__label">{label}</span>
        </div>
	);
}
