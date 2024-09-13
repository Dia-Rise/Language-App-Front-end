import classnames from "classnames";
import { Button, ButtonAppearance, ButtonShape, ButtonSize, ButtonVariant, Icon, IconSVG } from "../../components";
import { RoutePaths } from "../../enums";
import { useState } from "react";
import { createPortal } from "react-dom";
import { SiteHeaderSlideOut } from "./SiteHeaderSlideOut";

export type SiteHeaderProps = {
	label: string;
	className?: string;
};

export function SiteHeader({ label, className = "" }: SiteHeaderProps) {
	const [isSlideOutOpen, setIsSlideOutOpen] = useState<boolean>(false);

	const baseClassName = `site-header`;
	const classNames = classnames(baseClassName, className);

	return (
		<div className={classNames}>
			<div className={`${baseClassName}__left-wrapper`}>
				<Button
					href={RoutePaths.HOME}
					variant={ButtonVariant.ReactRouterLink}
					size={ButtonSize.XS}
					shape={ButtonShape.Soft}
					appearance={ButtonAppearance.Oultine}
					className={`${baseClassName}__button`}
				>
					<Icon svg={IconSVG.House} />
				</Button>

				<h2 className={`${baseClassName}__heading`}>{label}</h2>
			</div>

			<div className={`${baseClassName}__right-wrapper`}>
				<Button
					onClick={() => setIsSlideOutOpen(true)}
					variant={ButtonVariant.Button}
					size={ButtonSize.XS}
					shape={ButtonShape.Soft}
					appearance={ButtonAppearance.Oultine}
					className={`${baseClassName}__button`}
				>
					<Icon svg={IconSVG.Languages} />
				</Button>
			</div>
			{createPortal(
				<SiteHeaderSlideOut isOpen={isSlideOutOpen} onClose={() => setIsSlideOutOpen(false)} />,
				document.body
			)}
		</div>
	);
}
