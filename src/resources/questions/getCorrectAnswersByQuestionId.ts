//! CURRENTLY THERE IS NO API OR DATABASE.
//! TYPICALLY A FETCH REQUEST WOULD BE CALLED.
//! BUT UNTIL A BACKEND HAS BEEN CREATED, THIS FUNCTION WILL JUST FILTER AN ARRAY.

import { correctAnswers } from "../../data/questions/correctAnswers";
import { QuizAnswerType } from "../../types";

export type getCorrectAnswersByQuestionIdResponse = QuizAnswerType[];

export function getCorrectAnswersByQuestionId(uuid: string): getCorrectAnswersByQuestionIdResponse {
	// return api call;

	return correctAnswers.filter((current) => current.questionId === uuid);
}
