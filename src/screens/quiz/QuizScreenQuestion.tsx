import classnames from "classnames";
import { useQuiz } from "../../hooks/useQuiz";
import { shuffleArray } from "../../utilities";
import { Button, ButtonAppearance, ButtonShape, ButtonSize, ButtonVariant } from "../../components";

type QuizScreenQuestionProps = {};

export function QuizScreenQuestion({}: QuizScreenQuestionProps) {
	const { questions } = useQuiz();

	const baseClassname = "quiz-screen-question";
	const classNames = classnames(baseClassname);

	function handleAnswerClick(answer: string | number | boolean) {
		console.log("you've clicked an answer.");
	}

	return (
		<div className={classNames}>
			{questions.length ? (
				<>
					<div className={`${baseClassname}__header`}></div>
					<div className={`${baseClassname}__question-container`}>{questions[0].furigana}</div>
					Place select the correct answers.
					<div className={`${baseClassname}__answer-continer`}>
						{shuffleArray(questions[0].possibleAnswers).map((current, index) => (
							<Button
								variant={ButtonVariant.Button}
								appearance={ButtonAppearance.Oultine}
								size={ButtonSize.XS}
								shape={ButtonShape.Curved}
								onClick={() => handleAnswerClick(current)}
							>
								{current}
							</Button>
						))}
					</div>
				</>
			) : (
				<></>
			)}
		</div>
	);
}
