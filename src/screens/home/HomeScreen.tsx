import { IconSVG } from "../../components";
import { RoutePaths } from "../../enums";
import { MegaButton, MegaButtonColor } from "../../layouts/MegaButton/MegaButton";

export function HomeScreen() {
	return (
		<div className="home-screen">
			<h1 className="home-screen__header">Main Menu</h1>
			<div className="home-screen__menu">
				<MegaButton
					href={RoutePaths.DICTIONARY}
					icon={IconSVG.Book}
					label={"Dictionary"}
					subLabel={"辞書"}
					color={MegaButtonColor.Orange}
				/>

				<MegaButton
					href={RoutePaths.QUIZ}
					icon={IconSVG.Search}
					label={"Quiz"}
					subLabel={"試験"}
					color={MegaButtonColor.Pink}
				/>
			</div>
		</div>
	);
}
