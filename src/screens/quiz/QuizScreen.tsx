import classnames from "classnames";
import { useQuiz } from "../../hooks/useQuiz";
import { QuizScreenIntro } from "./QuizScreenIntro/QuizScreenIntro";
import { QuizScreenQuestion } from "./QuizScreenQuestion/QuizScreenQuestion";
import { QuizScreenResults } from "./QuizScreenResults/QuizScreenResults";
import { QuizScreenLoading } from "./QuizScreenLoading/QuizScreenLoading";

type QuizScreenProps = {};

export function QuizScreen({}: QuizScreenProps) {
	const { currentQuestion, isLoading, isFinished } = useQuiz();

	const baseClassname = "quiz-screen";
	const classNames = classnames(baseClassname);

	// return <div className={classNames}>{isLoading ? <QuizScreenLoading /> : <QuizScreenIntro />}</div>;

	return (
		<div className={classNames}>
			{isLoading ? (
				<QuizScreenLoading />
			) : !isFinished ? (
				!currentQuestion ? (
					<QuizScreenIntro />
				) : (
					<QuizScreenQuestion />
				)
			) : (
				<QuizScreenResults />
			)}
		</div>
	);
}
