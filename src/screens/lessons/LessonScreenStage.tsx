import classnames from "classnames";
import { useLessons } from "../../hooks";
import { useEffect } from "react";

export function LessonScreenStage() {
	const { lesson, currentSlideIndex, getLesson } = useLessons();

	const baseClassname = "lesson-screen-stage";
	const classNames = classnames(baseClassname);

	useEffect(() => {
		getLesson();
	}, []);

	return (
		<div className={classNames}>
			<div className={`${baseClassname}__box`}>{lesson != null ? lesson[currentSlideIndex].content : <></>}</div>
		</div>
	);
}
