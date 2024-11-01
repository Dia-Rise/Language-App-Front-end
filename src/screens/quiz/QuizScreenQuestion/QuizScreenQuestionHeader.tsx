import classnames from "classnames";
import { useQuiz } from "../../../hooks";
import { Segments } from "../../../components";

export function QuizScreenQuestionHeader() {
	const { questions, currentQuestionIndex } = useQuiz();

	const baseClassname = "quiz-screen-question-header";
	const classNames = classnames(baseClassname);

	return (
		<div className={classNames}>
			<Segments amount={questions.length} amountCompleted={currentQuestionIndex} />
			<span>
				Question {currentQuestionIndex + 1} of {questions.length}
			</span>
		</div>
	);
}
