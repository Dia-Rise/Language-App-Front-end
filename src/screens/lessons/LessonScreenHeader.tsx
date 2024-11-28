import classnames from "classnames";
import { useLessons } from "../../hooks";
import { Segments } from "../../components";

export function LessonScreenHeader() {
	const { currentSlideTitle, slideCount } = useLessons();

	const baseClassname = "lesson-screen-header";
	const classNames = classnames(baseClassname);

	return (
		<div className={classNames}>
			<Segments amount={slideCount} amountCompleted={0} />
			<span className={`${baseClassname}__heading`}>{currentSlideTitle}</span>
		</div>
	);
}
