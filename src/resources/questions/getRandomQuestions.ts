//! CURRENTLY THERE IS NO API OR DATABASE.
//! TYPICALLY A FETCH REQUEST WOULD BE CALLED.
//! BUT UNTIL A BACKEND HAS BEEN CREATED, THIS FUNCTION WILL JUST FILTER AN ARRAY.

import { correctAnswers } from "../../data/questions/correctAnswers";
import { questions } from "../../data/questions/questions";
import { QuizQuestionType } from "../../types/QuizQuestionType";
import { shuffleArray } from "../../utilities";

export type getRandomQuestionsResponse = QuizQuestionType[];

export function getRandomQuestions(amount: number): getRandomQuestionsResponse {
	// return api call;

	// TODO - check that question has correct answer. otherwise exclude question.
	if (amount > questions.length) {
		console.warn("Amount requested cannot exceed the amount of possible questions.");
		amount = questions.length;
	}

	const result: Omit<QuizQuestionType, "possibleAnswers">[] = [];
	const fullResults: QuizQuestionType[] = [];

	function selectRandom() {
		const randomIndex = Math.floor(Math.random() * questions.length);
		const selectedQuestion = questions[randomIndex];

		if (result.includes(selectedQuestion)) {
			//Loop back around
			selectRandom();
		} else {
			//push here to prevent duplicates.
			result.push(selectedQuestion);

			//Get possible awnsers here
			const possibleAnswersArray: (string | number | boolean)[] = [];

			//Get correct awnser - If multiple only add one and random.
			const correctAnswersArray = correctAnswers.filter((current) => current.questionId === selectedQuestion.id);
			const randomCorrectAnswerIndex = Math.floor(Math.random() * correctAnswersArray.length);
			possibleAnswersArray.push(correctAnswersArray[randomCorrectAnswerIndex].content);

			//Grab random incorect answers (correct answer for different questions);
			// TODO - filter awnsers by question categoires.
			function selectRandomAnswer() {
				const randomAwnserIndex = Math.floor(Math.random() * correctAnswers.length);
				const incorrectAnswer = correctAnswers[randomAwnserIndex];

				if (possibleAnswersArray.includes(incorrectAnswer.content)) {
					//Loop back around.
					selectRandomAnswer();
				} else {
					possibleAnswersArray.push(incorrectAnswer.content);
				}
			}

			// TODO - Add 'awnserAmount' as a filter
			for (let i = 0; i < 2; i++) {
				selectRandomAnswer();
			}

			//Push complete question data.
			const fullResult = { possibleAnswers: shuffleArray(possibleAnswersArray), ...selectedQuestion };
			fullResults.push(fullResult);
		}
	}

	for (let i = 0; i < amount; i++) {
		selectRandom();
	}

	return fullResults;
}
