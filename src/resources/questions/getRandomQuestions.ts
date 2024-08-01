//! CURRENTLY THERE IS NO API OR DATABASE.
//! TYPICALLY A FETCH REQUEST WOULD BE CALLED.
//! BUT UNTIL A BACKEND HAS BEEN CREATED, THIS FUNCTION WILL JUST FILTER AN ARRAY.

import { questions } from "../../data/questions/questions";
import { QuizQuestionType } from "../../types/QuizQuestionType";

export type getRandomQuestionsResponse = QuizQuestionType[];

export function getRandomQuestions(amount: number): getRandomQuestionsResponse {
	// return api call;

	if (amount > questions.length) {
		console.warn("Amount requested cannot exceed the amount of possible questions.");
		amount = questions.length;
	}

	const result: QuizQuestionType[] = [];

	function selectRandom() {
		const randomIndex = Math.floor(Math.random() * questions.length);
		const selectedQuestion = questions[randomIndex];

		result.includes(selectedQuestion) ? selectRandom() : result.push(selectedQuestion);
	}

	for (let i = 0; i < amount; i++) {
		selectRandom();
	}

	return result;
}
