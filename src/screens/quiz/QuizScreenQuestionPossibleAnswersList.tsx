import { shuffleArray } from "../../utilities";
import { Button, ButtonAppearance, ButtonShape, ButtonSize, ButtonVariant } from "../../components";
import { QuizQuestionType } from "../../types";

type QuizScreenQuestionProps = {
	disabled: boolean;
	question: QuizQuestionType;
	onAnswerClick: (answer: string | number | boolean) => void;
};

export function QuizScreenQuestionPossibleAnswersList({ disabled, question, onAnswerClick }: QuizScreenQuestionProps) {
	return shuffleArray(question.possibleAnswers).map((current, index) => (
		<Button
			disabled={disabled}
			key={index}
			variant={ButtonVariant.Button}
			appearance={ButtonAppearance.Oultine}
			size={ButtonSize.XS}
			shape={ButtonShape.Soft}
			onClick={() => onAnswerClick(current)}
		>
			{current}
		</Button>
	));
}
