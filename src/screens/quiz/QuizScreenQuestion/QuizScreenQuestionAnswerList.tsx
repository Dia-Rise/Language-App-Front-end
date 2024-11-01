import classnames from "classnames";
import { useQuiz } from "../../../hooks";
import { Button, ButtonAppearance, ButtonColors, ButtonShape, ButtonSize, ButtonVariant } from "../../../components";
import { useState, useEffect } from "react";
import { shuffleArray } from "../../../utilities";
import correctAnswerSoundEffect from "../../../assets/sounds/correct-answer.mp3";
import incorrectAnswerSoundEffect from "../../../assets/sounds/incorrect-answer.mp3";
import { getCorrectAnswersByQuestionId } from "../../../resources/questions";
import { QuizAnswerType } from "../../../types";
import { Languages } from "../../../enums";
import { checkAnswerIsCorrect } from "../../../utilities/checkAnswerIsCorrect";

export function QuizScreenQuestionAnswerList() {
	const { currentQuestion, currentQuestionIndex, questionsResponses, updateQuestionsResponses } = useQuiz();
	const [shuffledAnswers, setShuffledAnswers] = useState<QuizAnswerType[]>([]);

	async function handleAnswerClick(answer: QuizAnswerType) {
		if (!currentQuestion) return;

		try {
			const response = getCorrectAnswersByQuestionId(currentQuestion.id);
			updateQuestionsResponses(answer, response);
		} catch (error) {
			updateQuestionsResponses(answer, [], true);
			console.error(`QuizScreenQuestionAnswerList - handleAnswerClick - An error has occurred: ${error}`);
		}
	}

	useEffect(() => {
		if (!currentQuestion) return;
		setShuffledAnswers(shuffleArray(currentQuestion.possibleAnswers));
	}, [currentQuestion]);

	const baseClassname = "quiz-screen-question-answers-list";
	const classNames = classnames(baseClassname);

	return (
		<div className={classNames}>
			<span className={`${baseClassname}__request`}>Please select the correct answer.</span>
			<div className={`${baseClassname}__answers`}>
				{shuffledAnswers.map((current, index) => (
					<Button
						color={
							questionsResponses[currentQuestionIndex]
								? checkAnswerIsCorrect(current, questionsResponses[currentQuestionIndex].correctAnswers)
									? ButtonColors.Success
									: ButtonColors.Error
								: ButtonColors.Light
						}
						disabled={questionsResponses[currentQuestionIndex] != null}
						key={index}
						variant={ButtonVariant.Button}
						appearance={ButtonAppearance.Oultine}
						size={ButtonSize.XS}
						shape={ButtonShape.Soft}
						onClick={() => handleAnswerClick(current)}
					>
						{current.language === Languages.EN ? current.content : current.gana}
					</Button>
				))}
			</div>
		</div>
	);
}
