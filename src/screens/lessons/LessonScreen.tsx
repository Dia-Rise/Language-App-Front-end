import classnames from "classnames";
import { LessonProvider } from "../../hooks";
import { LessonScreenHeader } from "./LessonScreenHeader";
import { LessonScreenStage } from "./LessonScreenStage";
import { LessonScreenFooter } from "./LessonScreenFooter";

export function LessonScreen() {
	const baseClassname = "lesson-screen";
	const classNames = classnames(baseClassname);

	return (
		<LessonProvider>
			<div className={classNames}>
				<LessonScreenHeader />
				<LessonScreenStage />
				<LessonScreenFooter />
			</div>
		</LessonProvider>
	);
}
