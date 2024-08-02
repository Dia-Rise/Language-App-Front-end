//! CURRENTLY THERE IS NO API OR DATABASE.
//! TYPICALLY A FETCH REQUEST WOULD BE CALLED.
//! BUT UNTIL A BACKEND HAS BEEN CREATED, THIS FUNCTION WILL JUST FILTER AN ARRAY.

import { correctAnswers } from "../../data/questions/correctAnswers";

export function checkCorrectAnswerByQuestionId(answer: string | number | boolean, uuid: string): boolean {
	// return api call;

	const correctAnswersArray = correctAnswers.filter((current) => current.questionId === uuid);

	return correctAnswersArray.some((current) => current.content === answer);
}
