import { MouseEvent } from "react";
import { Icon, IconSVG, IconSize } from "../Icon/Icon";

type SwitchFalseProps =
	| {
			falseIcon?: never | undefined;
			falseLabel?: never;
	  }
	| {
			falseIcon?: IconSVG;
			falseLabel?: string;
	  };

type SwitchTrueProps =
	| {
			trueIcon?: never | undefined;
			trueLabel?: never;
	  }
	| {
			trueIcon?: IconSVG;
			trueLabel?: string;
	  };

export type SwitchCommonProps = {
	value: boolean;
	onClick: () => void;
};

export type SwitchProps = SwitchCommonProps & SwitchFalseProps & SwitchTrueProps;

export function Switch({ value, onClick, falseIcon, trueIcon }: SwitchProps) {
	function handleClick(e: MouseEvent) {
		e.preventDefault();
		onClick();
	}

	return (
		<button className={`switch ${value ? "switch--active" : ""}`} onClick={(e: MouseEvent) => handleClick(e)}>
			<input type="checkbox" className="switch__input" checked={value} readOnly />
			<div className={`switch__dial`}></div>
			{falseIcon && <Icon className="switch__icon switch__icon--false" svg={falseIcon} size={IconSize.XS} />}
			{trueIcon && <Icon className="switch__icon switch__icon--true" svg={trueIcon} size={IconSize.XS} />}
		</button>
	);
}
