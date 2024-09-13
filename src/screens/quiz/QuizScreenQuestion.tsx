import classnames from "classnames";
import { useQuiz } from "../../hooks/useQuiz";
import { shuffleArray } from "../../utilities";
import { Button, ButtonAppearance, ButtonShape, ButtonSize, ButtonVariant } from "../../components";
import { checkCorrectAnswerByQuestionId } from "../../resources/questions";
import { useEffect, useMemo, useState } from "react";
import { AnswerResponseBanner, AnswerResponseState } from "../../layouts";
import { QuizScreenQuestionPossibleAnswersList } from "./QuizScreenQuestionPossibleAnswersList";

type QuizScreenQuestionProps = {};

// TODO - restructure away from just changing index.
export function QuizScreenQuestion({}: QuizScreenQuestionProps) {
	const { currentQuestion, nextQuestion } = useQuiz();
	const [possibleAnswers, setPossibleAnswers] = useState<(string | number | boolean)[]>([]);
	const [isAnswerCorrect, setIsAnswerCorrect] = useState<AnswerResponseState | null>(null);

	const baseClassname = "quiz-screen-question";
	const classNames = classnames(baseClassname);

	function handleAnswerClick(answer: string | number | boolean) {
		if (!currentQuestion) return;

		const response = checkCorrectAnswerByQuestionId(answer, currentQuestion.id);
		setIsAnswerCorrect(response ? AnswerResponseState.Correct : AnswerResponseState.Incorrect);
	}

	function handleNextQuestionClick() {
		nextQuestion();
		setIsAnswerCorrect(null);
	}

	useEffect(() => {
		if (!currentQuestion) return;

		setPossibleAnswers(shuffleArray(currentQuestion.possibleAnswers));
	}, [currentQuestion]);

	return (
		<div className={classNames}>
			{currentQuestion ? (
				<>
					<div className={`${baseClassname}__header`}></div>
					<div className={`${baseClassname}__question-container`}>{currentQuestion.gana}</div>
					Place select the correct answers.
					<div className={`${baseClassname}__answer-continer`}>
						{possibleAnswers.map((current, index) => (
							<Button
								disabled={isAnswerCorrect !== null}
								key={index}
								variant={ButtonVariant.Button}
								appearance={ButtonAppearance.Oultine}
								size={ButtonSize.XS}
								shape={ButtonShape.Soft}
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
			{isAnswerCorrect !== null && (
				<AnswerResponseBanner
					state={isAnswerCorrect}
					onClickNextQuestion={handleNextQuestionClick}
					onClickAbandonQuiz={() => {}}
				/>
			)}
		</div>
	);
}
