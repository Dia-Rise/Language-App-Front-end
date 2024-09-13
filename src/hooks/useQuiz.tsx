import { createContext, ReactNode, useContext, useState } from "react";
import { QuizQuestionType } from "../types/QuizQuestionType";
import { getRandomQuestions } from "../resources/questions";
import { AnswerResponseState } from "../layouts";

// CONTEXT
type QuizContextProps = {
	questions: QuizQuestionType[];
	currentQuestion: QuizQuestionType | null;
	currentQuestionIndex: number;
	score: number;
	addToScore: (addition: number) => void;
	nextQuestion: () => void;
	previousQuestion: () => void;
	getNewQuestions: (amount?: number) => void;
};

export const QuizContext = createContext<QuizContextProps>({
	questions: [],
	currentQuestion: null,
	currentQuestionIndex: 0,
	score: 0,
	addToScore: (addition: number) => {},
	nextQuestion: () => {},
	previousQuestion: () => {},
	getNewQuestions: () => {},
});

// PROVIDER
type QuizProviderProps = {
	children: ReactNode;
};

export function QuizProvider({ children }: QuizProviderProps) {
	const [score, setScore] = useState<number>(0);
	const [questions, setQuestions] = useState<QuizQuestionType[]>([]);
	const [currentQuestion, setCurrentQuestion] = useState<QuizQuestionType | null>(null);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

	function addToScore(addition: number) {
		setScore(score + addition);
	}

	function nextQuestion() {
		//TODO - Finish quiz if newIndex is more than array length.

		//Index cannot go above the length of the 'questions' array
		const newIndex =
			currentQuestionIndex + 1 > questions.length - 1 ? questions.length - 1 : currentQuestionIndex + 1;
		setCurrentQuestionIndex(newIndex);
		setCurrentQuestion(questions[newIndex]);
	}

	function previousQuestion() {
		//Index cannot go below 0.
		const newIndex = currentQuestionIndex - 1 < 0 ? 0 : currentQuestionIndex - 1;
		setCurrentQuestionIndex(newIndex);
		setCurrentQuestion(questions[newIndex]);
	}

	async function getNewQuestions(amount: number = 10) {
		try {
			const questionsResponse = getRandomQuestions(amount);
			setQuestions(questionsResponse);
			setCurrentQuestionIndex(0);
			setCurrentQuestion(questionsResponse[0]);
		} catch (error) {
			throw new Error(`useQuiz - getNewQuestions: ${error}`);
		}
	}

	return (
		<QuizContext.Provider
			value={{
				getNewQuestions,
				questions,
				currentQuestionIndex,
				currentQuestion,
				nextQuestion,
				previousQuestion,
				score,
				addToScore,
			}}
		>
			{children}
		</QuizContext.Provider>
	);
}

// HOOK
export function useQuiz() {
	return useContext(QuizContext);
}
