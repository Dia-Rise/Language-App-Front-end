import { useQuiz } from "../../../hooks";
import { AnswerResponseBanner } from "../../../layouts";

export function QuizScreenQuestionResponseBanner() {
	const { currentQuestionIndex, questionsResponses, goToNextQuestion } = useQuiz();

	function handleNextQuestionClick() {
		goToNextQuestion();
	}

	return questionsResponses[currentQuestionIndex] ? (
		<AnswerResponseBanner
			state={questionsResponses[currentQuestionIndex].state}
			onClickNextQuestion={handleNextQuestionClick}
			onClickAbandonQuiz={() => {}}
		/>
	) : (
		<></>
	);
}
