import classnames from "classnames";
import { Icon, IconSize, IconSVG } from "../Icon/Icon";

export enum AlertState {
	Default = "",
	Error = "alert--error",
	Warning = "alert--warning",
	Success = "alert--success",
	Info = "alert--info",
	Primary = "alert--primary",
	Secondary = "alert--secondary",
}

type AlertDismissProps =
	| {
			dismissable?: false;
			onDismiss?: never;
	  }
	| {
			dismissable: true;
			onDismiss: () => void;
	  };

type AlertCommonProps = {
	state?: AlertState;
	header?: string;
	content: string;
	icon?: IconSVG;
	className?: string;
};

export type AlertProps = AlertCommonProps & AlertDismissProps;

export function Alert({
	header,
	content,
	icon,
	state = AlertState.Default,
	dismissable,
	onDismiss,
	className = "",
}: AlertProps) {
	const baseClassName = `alert`;
	const classNames = classnames(
		baseClassName,
		{
			[`${baseClassName}--dismissable`]: dismissable,
		},
		state,
		className
	);

	return (
		<div className={classNames}>
			{icon && <Icon className={`${baseClassName}__icon`} svg={icon} size={IconSize.MD} />}
			<div className={`${baseClassName}__text`}>
				{header && <span className={`${baseClassName}__header`}>{header}</span>}
				<span className={`${baseClassName}__content`}>{content}</span>
			</div>

			{dismissable && (
				<button className={`${baseClassName}__dismiss`} onClick={onDismiss}>
					<Icon svg={IconSVG.Cross} size={IconSize.XS} />
				</button>
			)}
		</div>
	);
}
