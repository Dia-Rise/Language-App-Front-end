import classnames from "classnames";
import { useQuiz } from "../../../hooks/useQuiz";
import { useEffect, useState } from "react";
import { AnswerResponseBanner, AnswerResponseState } from "../../../layouts";
import correctAnswerSoundEffect from "../../../assets/sounds/correct-answer.mp3";
import incorrectAnswerSoundEffect from "../../../assets/sounds/incorrect-answer.mp3";
import { Languages } from "../../../enums";
import { QuizScreenQuestionHeader } from "./QuizScreenQuestionHeader";
import { QuizScreenQuestionAnswerList } from "./QuizScreenQuestionAnswerList";
import { QuizScreenQuestionResponseBanner } from "./QuizScreenQuestionResponseBanner";

type QuizScreenQuestionProps = {};

export function QuizScreenQuestion({}: QuizScreenQuestionProps) {
	const { currentQuestion } = useQuiz();

	const baseClassname = "quiz-screen-question";
	const classNames = classnames(baseClassname);

	return (
		<div className={classNames}>
			{currentQuestion ? (
				<>
					<QuizScreenQuestionHeader />

					<div className={`${baseClassname}__question-container`}>
						{currentQuestion.language === Languages.JP ? currentQuestion.gana : currentQuestion.content}
					</div>

					<QuizScreenQuestionAnswerList />
					<QuizScreenQuestionResponseBanner />
				</>
			) : (
				<></>
			)}
		</div>
	);
}
