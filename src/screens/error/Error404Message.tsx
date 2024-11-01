import { Icon, IconSize, IconSVG } from "../../components";

export function Error404Message() {
	return (
		<>
			<Icon className="error-screen__icon" svg={IconSVG.Brocken_pencil} size={IconSize.custom} />
			<div className="error-screen__message">
				<h2>Nothing's written down.</h2>
				<span>Page not found - Error 404</span>
			</div>
		</>
	);
}
