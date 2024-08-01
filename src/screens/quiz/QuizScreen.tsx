import classnames from "classnames";
import { QuizProvider, useQuiz } from "../../hooks/useQuiz";
import { useEffect } from "react";
import { QuizScreenIntro } from "./QuizScreenIntro";
import { QuizScreenQuestion } from "./QuizScreenQuestion";

type QuizScreenProps = {};

export function QuizScreen({}: QuizScreenProps) {
	const baseClassname = "quiz-screen";
	const classNames = classnames(baseClassname);

	return (
		<QuizProvider>
			<QuizScreenIntro />
			<QuizScreenQuestion />
		</QuizProvider>
	);
}
