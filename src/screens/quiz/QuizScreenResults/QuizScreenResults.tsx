import classnames from "classnames";
import { QuizScreenResultsAccordion } from "./QuizScreenResultsAccordion";
import { useQuiz } from "../../../hooks";
import { CircularProgress } from "../../../components/CircularProgress/CircularProgress";
import { calculatePercentage } from "../../../utilities";
import { Button, ButtonAppearance, ButtonColors, ButtonShape, ButtonVariant } from "../../../components";
import { AnswerResponseState } from "../../../layouts";

type QuizScreenResultsProps = {};

export function QuizScreenResults({}: QuizScreenResultsProps) {
	const { questions, questionsResponses, resetAndPlayAgain, resetQuiz, isFinished } = useQuiz();

	const baseClassname = "quiz-screen-results";
	const classNames = classnames(baseClassname);

	function calculateScore(): number {
		let score = 0;
		questionsResponses.forEach((current, index) => {
			if (current.state === AnswerResponseState.Correct) {
				score = score + 1;
			}
		});

		return score;
	}

	function renderMessage(): string {
		const percentage = calculatePercentage(calculateScore(), questions.length);

		if (percentage >= 100) {
			return "Perfect!";
		} else if (percentage >= 75) {
			return "Good job.";
		} else if (percentage >= 50) {
			return "Well done.";
		} else if (percentage >= 25) {
			return "Nice effort.";
		} else {
			return "Try again.";
		}
	}

	return (
		<div className={classNames}>
			<div className={`${baseClassname}__left`}>
				<CircularProgress
					className={`${baseClassname}__gauge`}
					size={272}
					thickness={16}
					percent={calculatePercentage(calculateScore(), questions.length)}
				>
					<span className={`${baseClassname}__score`}>
						{calculateScore()}/{questions.length}
					</span>
					<span className={`${baseClassname}__message`}>{renderMessage()}</span>
				</CircularProgress>
				<div className={`${baseClassname}__actions`}>
					<Button
						variant={ButtonVariant.Button}
						shape={ButtonShape.Soft}
						color={ButtonColors.Primary}
						onClick={() => resetAndPlayAgain()}
					>
						Play Again
					</Button>
					<Button
						variant={ButtonVariant.Button}
						shape={ButtonShape.Soft}
						appearance={ButtonAppearance.Oultine}
						onClick={() => resetQuiz()}
					>
						Return Home
					</Button>
				</div>
			</div>
			<div className={`${baseClassname}__right`}>
				<QuizScreenResultsAccordion />
			</div>
		</div>
	);
}
