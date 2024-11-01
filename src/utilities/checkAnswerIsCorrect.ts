import { Hira, Kata, Languages } from "../enums";
import { QuizAnswerType } from "../types";

export function checkAnswerIsCorrect(answer: QuizAnswerType, correctAnswers: QuizAnswerType[]): boolean {
	return correctAnswers.some((current) => current === answer);
}
