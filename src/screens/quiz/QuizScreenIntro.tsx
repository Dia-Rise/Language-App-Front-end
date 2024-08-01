import classnames from "classnames";
import { QuizProvider, useQuiz } from "../../hooks/useQuiz";
import { useEffect } from "react";

type QuizScreenIntroProps = {};

export function QuizScreenIntro({}: QuizScreenIntroProps) {
	const { getNewQuestions } = useQuiz();

	const baseClassname = "quiz-screen-intro";
	const classNames = classnames(baseClassname);

	return (
		<div className={classNames}>
			<button onClick={() => getNewQuestions(50)}>get questions</button>
		</div>
	);
}
