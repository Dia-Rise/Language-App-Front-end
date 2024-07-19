import classnames from "classnames";
import { SlideOut } from "../../components";
import { Backdrop } from "../../components/Backdrop/Backdrop";
import { CharacterGrid } from "../CharacterGrid/CharacterGrid";

type SiteHeaderSlideOutProps = {
	isOpen: boolean;
	onClose: () => void;
	className?: string;
};

export function SiteHeaderSlideOut({ isOpen, onClose, className = "" }: SiteHeaderSlideOutProps) {
	const baseClassName = `site-header-slide-out`;
	const classNames = classnames(baseClassName, className);

	return (
		<>
			<Backdrop className={`${baseClassName}__backdrop`} isVisible={isOpen} onClick={() => onClose()} />
			<SlideOut className={classNames} isOpen={isOpen}>
				<div className={`${baseClassName}__content`}>
					<CharacterGrid />
				</div>
			</SlideOut>
		</>
	);
}
