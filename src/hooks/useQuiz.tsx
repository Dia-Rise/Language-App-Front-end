import { createContext, ReactNode, useContext, useState } from "react";
import { QuizQuestionType } from "../types/QuizQuestionType";
import { getRandomQuestions } from "../resources/questions";
import { QuizAnswerType } from "../types";
import { AnswerResponseState } from "../layouts";
import { checkAnswerIsCorrect } from "../utilities/checkAnswerIsCorrect";

// CONTEXT
type QuizContextProps = {
	isLoading: boolean;
	isFinished: boolean;
	questions: QuizQuestionType[];
	questionsResponses: { state: AnswerResponseState; givenAnswer: QuizAnswerType; correctAnswers: QuizAnswerType[] }[];
	currentQuestion: QuizQuestionType | null;
	currentQuestionIndex: number;
	goToNextQuestion: () => void;
	goToPreviousQuestion: () => void;
	setupNewRandomQuiz: (amount?: number) => void;
	updateQuestionsResponses: (
		givenAnswer: QuizAnswerType,
		_correctAnswers: QuizAnswerType[],
		networkError?: boolean
	) => void;
	resetQuiz: () => void;
	resetAndPlayAgain: () => void;
};

export const QuizContext = createContext<QuizContextProps>({
	isLoading: false,
	isFinished: false,
	questions: [],
	questionsResponses: [],
	currentQuestion: null,
	currentQuestionIndex: 0,
	goToNextQuestion: () => {},
	goToPreviousQuestion: () => {},
	setupNewRandomQuiz: () => {},
	updateQuestionsResponses: () => {},
	resetQuiz: () => {},
	resetAndPlayAgain: () => {},
});

type QuizProviderProps = {
	children: ReactNode;
};

export function QuizProvider({ children }: QuizProviderProps) {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isFinished, setIsFinished] = useState<boolean>(false);

	const [questions, setQuestions] = useState<QuizQuestionType[]>([]);
	const [currentQuestion, setCurrentQuestion] = useState<QuizQuestionType | null>(null);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

	const [questionsResponses, setQuestionsResponses] = useState<
		{ state: AnswerResponseState; givenAnswer: QuizAnswerType; correctAnswers: QuizAnswerType[] }[]
	>([]);

	// Navigation
	function goToNextQuestion() {
		const newIndex = currentQuestionIndex + 1;

		if (newIndex > questions.length - 1) {
			completeQuiz();
			return;
		}

		setCurrentQuestionIndex(newIndex);
		setCurrentQuestion(questions[newIndex]);
	}

	function goToPreviousQuestion() {
		const newIndex = currentQuestionIndex - 1 < 0 ? 0 : currentQuestionIndex - 1;
		setCurrentQuestionIndex(newIndex);
		setCurrentQuestion(questions[newIndex]);
	}

	// Initialization / Setup
	async function setupNewQuiz() {
		setIsLoading(true);
		// Get quiz by quiz_id
	}

	async function setupNewRandomQuiz(amount: number = 10) {
		setIsLoading(true);
		// get random questions based on filters given.
		try {
			const questionsResponse = getRandomQuestions(amount);
			setQuestions(questionsResponse);
			setCurrentQuestionIndex(0);
			setCurrentQuestion(questionsResponse[0]);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			throw new Error(`useQuiz - setupNewRandomQuiz: ${error}`);
		}
	}

	// Reset
	function resetQuiz() {
		setQuestions([]);
		setCurrentQuestion(null);
		setCurrentQuestionIndex(0);

		setQuestionsResponses([]);

		setIsFinished(false);
	}

	function resetAndPlayAgain() {
		resetQuiz();
		// TODO - Needs to be dynmaic based on current quiz taken.
		setupNewRandomQuiz();
	}

	// Updates
	function updateQuestionsResponses(
		givenAnswer: QuizAnswerType,
		correctAnswers: QuizAnswerType[] = [],
		networkError = false
	) {
		if (!networkError) {
			const state = checkAnswerIsCorrect(givenAnswer, correctAnswers)
				? AnswerResponseState.Correct
				: AnswerResponseState.Incorrect;
			setQuestionsResponses((prev) => [...prev, { state, givenAnswer, correctAnswers }]);
		} else {
			setQuestionsResponses((prev) => [
				...prev,
				{ state: AnswerResponseState.NetworkError, givenAnswer, correctAnswers },
			]);
		}
	}

	// Completion
	function completeQuiz() {
		setIsFinished(true);
	}

	return (
		<QuizContext.Provider
			value={{
				isLoading,
				isFinished,
				questions,
				currentQuestion,
				currentQuestionIndex,
				questionsResponses,
				// Navigation
				goToNextQuestion,
				goToPreviousQuestion,
				// Initialization / Setup
				setupNewRandomQuiz,
				// Reset
				resetQuiz,
				resetAndPlayAgain,
				// Updates
				updateQuestionsResponses,
			}}
		>
			{children}
		</QuizContext.Provider>
	);
}

export function useQuiz() {
	return useContext(QuizContext);
}

// type QuizContextProps = {
// 	isLoading: boolean;
// 	questions: (QuizQuestionType & { possibleAnswers: (string | number | boolean)[] })[];
// 	currentQuestion: (QuizQuestionType & { possibleAnswers: (string | number | boolean)[] }) | null;
// 	currentQuestionIndex: number;
// 	answersGiven: QuizAnswerType["content"][];
// 	correctAnswers: QuizAnswerType["content"][][];
// 	isFinished: boolean;
// 	goToNextQuestion: () => void;
// 	goToPreviousQuestion: () => void;
// 	getNewRandomQuestions: (amount?: number) => void;
// 	updateAnswersGiven: (newAnswer: QuizAnswerType["content"]) => void;
// 	updateCorrectAnswers: (newCorrectAnswers: QuizAnswerType["content"][]) => void;
// 	resetQuiz: () => void;
// 	resetAndPlayAgain: () => void;
// };

// export const QuizContext = createContext<QuizContextProps>({
// 	isLoading: false,
// 	questions: [],
// 	currentQuestion: null,
// 	currentQuestionIndex: 0,
// 	answersGiven: [],
// 	correctAnswers: [],
// 	isFinished: false,
// 	goToNextQuestion: () => {},
// 	goToPreviousQuestion: () => {},
// 	getNewRandomQuestions: () => {},
// 	updateAnswersGiven: () => {},
// 	updateCorrectAnswers: () => {},
// 	resetQuiz: () => {},
// 	resetAndPlayAgain: () => {},
// });

// // PROVIDER
// type QuizProviderProps = {
// 	children: ReactNode;
// };

// export function QuizProvider({ children }: QuizProviderProps) {
// 	const [isLoading, setIsLoading] = useState<boolean>(false);
// 	const [questions, setQuestions] = useState<
// 		(QuizQuestionType & { possibleAnswers: (string | number | boolean)[] })[]
// 	>([]);
// 	const [currentQuestion, setCurrentQuestion] = useState<
// 		(QuizQuestionType & { possibleAnswers: (string | number | boolean)[] }) | null
// 	>(null);
// 	const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
// 	const [answersGiven, setAnswersGiven] = useState<QuizAnswerType["content"][]>([]);
// 	const [correctAnswers, setCorrectAnswers] = useState<QuizAnswerType["content"][][]>([]);
// 	const [isFinished, setIsFinished] = useState<boolean>(false);

// 	function updateAnswersGiven(newAnswer: QuizAnswerType["content"]) {
// 		setAnswersGiven((prev) => [...prev, newAnswer]);
// 	}

// 	function updateCorrectAnswers(newCorrectAnswers: QuizAnswerType["content"][]) {
// 		setCorrectAnswers((prev) => [...prev, newCorrectAnswers]);
// 	}

// 	function goToNextQuestion() {
// 		if (currentQuestionIndex + 1 > questions.length - 1) {
// 			// console.log("FINISH QUIZ");
// 			completeQuiz();
// 		} else {
// 			const newIndex = currentQuestionIndex + 1;
// 			setCurrentQuestionIndex(newIndex);
// 			setCurrentQuestion(questions[newIndex]);
// 		}
// 	}

// 	function goToPreviousQuestion() {
// 		//Index cannot go below 0.
// 		const newIndex = currentQuestionIndex - 1 < 0 ? 0 : currentQuestionIndex - 1;
// 		setCurrentQuestionIndex(newIndex);
// 		setCurrentQuestion(questions[newIndex]);
// 	}

// 	async function getNewRandomQuestions(amount: number = 10) {
// 		setIsLoading(true);
// 		try {
// 			const questionsResponse = getRandomQuestions(amount);
// 			setQuestions(questionsResponse);
// 			setCurrentQuestionIndex(0);
// 			setCurrentQuestion(questionsResponse[0]);
// 			setIsLoading(false);
// 		} catch (error) {
// 			setIsLoading(false);
// 			throw new Error(`useQuiz - getNewRandomQuestions: ${error}`);
// 		}
// 	}

// 	//TODO - there needs to be more process here.
// 	function completeQuiz() {
// 		// Start loading
// 		// Get/Complie all information.
// 		setIsFinished(true);
// 	}

// 	function resetQuiz() {
// 		setQuestions([]);
// 		setCurrentQuestion(null);
// 		setCurrentQuestionIndex(0);

// 		setAnswersGiven([]);
// 		setCorrectAnswers([]);

// 		setIsFinished(false);
// 	}

// 	function resetAndPlayAgain() {
// 		resetQuiz();
// 		getNewRandomQuestions();
// 	}

// 	return (
// 		<QuizContext.Provider
// 			value={{
// 				isLoading,
// 				getNewRandomQuestions,
// 				questions,
// 				answersGiven,
// 				correctAnswers,
// 				currentQuestion,
// 				currentQuestionIndex,
// 				goToNextQuestion,
// 				goToPreviousQuestion,
// 				updateAnswersGiven,
// 				updateCorrectAnswers,
// 				isFinished,
// 				resetQuiz,
// 				resetAndPlayAgain,
// 			}}
// 		>
// 			{children}
// 		</QuizContext.Provider>
// 	);
// }

// // HOOK
// export function useQuiz() {
// 	return useContext(QuizContext);
// }
