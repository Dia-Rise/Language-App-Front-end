import { createContext, ReactNode, useContext, useState } from "react";
import { QuizQuestionType } from "../types/QuizQuestionType";
import { getRandomQuestions } from "../resources/questions";

// CONTEXT
type QuizContextProps = {
	questions: QuizQuestionType[];
	score: number;
	updateScore: (number: number) => void;
	getNewQuestions: (amount?: number) => void;
};

export const QuizContext = createContext<QuizContextProps>({
	questions: [],
	score: 0,
	updateScore: (number: number) => {},
	getNewQuestions: () => {},
});

// PROVIDER
type QuizProviderProps = {
	children: ReactNode;
};

export function QuizProvider({ children }: QuizProviderProps) {
	const [score, setScore] = useState<number>(0);
	const [questions, setQuestions] = useState<QuizQuestionType[]>([]);

	function updateScore(number: number) {
		setScore(score + number);
	}

	async function getNewQuestions(amount: number = 10) {
		try {
			const questionsResponse = getRandomQuestions(amount);
			setQuestions(questionsResponse);
		} catch (error) {
			throw new Error(`useQuiz - getNewQuestions: ${error}`);
		}
	}

	return (
		<QuizContext.Provider value={{ getNewQuestions, questions, score, updateScore }}>
			{children}
		</QuizContext.Provider>
	);
}

// HOOK
export function useQuiz() {
	return useContext(QuizContext);
}
