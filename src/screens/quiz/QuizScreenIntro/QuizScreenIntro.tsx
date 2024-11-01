import classnames from "classnames";
import { QuizProvider, useQuiz } from "../../../hooks/useQuiz";

type QuizScreenIntroProps = {};

export function QuizScreenIntro({}: QuizScreenIntroProps) {
	const { setupNewRandomQuiz } = useQuiz();

	const baseClassname = "quiz-screen-intro";
	const classNames = classnames(baseClassname);

	return (
		<div className={classNames}>
			<button onClick={() => setupNewRandomQuiz(50)}>get questions</button>
		</div>
	);
}
