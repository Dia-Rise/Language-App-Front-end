import classnames from "classnames";
import { Button, ButtonAppearance, ButtonShape, ButtonSize, ButtonVariant, Icon, IconSVG } from "../../components";
import { RoutePaths } from "../../enums";

export type SiteHeaderProps = {
	label: string;
	onMenuClick: () => void;
	className?: string;
};

export function SiteHeader({ label, onMenuClick, className = "" }: SiteHeaderProps) {
	const baseClassName = `site-header`;
	const classNames = classnames(baseClassName, className);

	return (
		<div className={classNames}>
			<div className={`${baseClassName}__left-wrapper`}>
				<Button
					href={RoutePaths.HOME}
					variant={ButtonVariant.ReactRouterLink}
					size={ButtonSize.XS}
					shape={ButtonShape.Curved}
					appearance={ButtonAppearance.Oultine}
					className={`${baseClassName}__button`}
				>
					<Icon svg={IconSVG.House} />
				</Button>

				<h2 className={`${baseClassName}__heading`}>{label}</h2>
			</div>

			<div className={`${baseClassName}__right-wrapper`}>
				<Button
					onClick={onMenuClick}
					variant={ButtonVariant.Button}
					size={ButtonSize.XS}
					shape={ButtonShape.Curved}
					appearance={ButtonAppearance.Oultine}
					className={`${baseClassName}__button`}
				>
					<Icon svg={IconSVG.Languages} />
				</Button>
			</div>
		</div>
	);
}
