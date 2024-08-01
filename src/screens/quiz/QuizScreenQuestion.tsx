import classnames from "classnames";
import { QuizProvider, useQuiz } from "../../hooks/useQuiz";
import { useEffect } from "react";
import { shuffleArray } from "../../utilities";

type QuizScreenQuestionProps = {};

export function QuizScreenQuestion({}: QuizScreenQuestionProps) {
	const { questions } = useQuiz();

	const baseClassname = "quiz-screen-question";
	const classNames = classnames(baseClassname);

	const answersArray = [1, 2, 3, 4, 5];

	return (
		<div className={classNames}>
			{questions.length ? (
				<>
					<div className={`${baseClassname}__header`}></div>
					<div className={`${baseClassname}__question-container`}>{questions[0].furigana}</div>
					<div className={`${baseClassname}__answer-continer`}>
						{shuffleArray(answersArray).map((current, index) => (
							<>{current}</>
						))}
					</div>
				</>
			) : (
				<></>
			)}
		</div>
	);
}
