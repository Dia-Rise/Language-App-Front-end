import { Icon, IconSize, IconSVG } from "..";

export type TabButtonProps = {
	label: string;
	icon?: IconSVG;
	isActive: boolean;
	onClick: () => void;
};

export function TabButton({ label, icon, isActive, onClick }: TabButtonProps) {
	const baseClassName = "tab-button";

	return (
		<button className={`${baseClassName} ${isActive ? `${baseClassName}--active` : ""}`} {...{ onClick }}>
			{icon && <Icon svg={icon} size={IconSize.SM} />}
			{label}
		</button>
	);
}
