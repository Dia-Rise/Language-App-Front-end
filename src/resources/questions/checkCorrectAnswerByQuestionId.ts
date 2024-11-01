//! CURRENTLY THERE IS NO API OR DATABASE.
//! TYPICALLY A FETCH REQUEST WOULD BE CALLED.
//! BUT UNTIL A BACKEND HAS BEEN CREATED, THIS FUNCTION WILL JUST FILTER AN ARRAY.

import { correctAnswers } from "../../data/questions/correctAnswers";
import { Languages } from "../../enums";

//Todo - rethink function to get the correct awnsers.
export function checkCorrectAnswerByQuestionId(answer: string | number | boolean, uuid: string): boolean {
	// return api call;
	const correctAnswersArray = correctAnswers.filter((current) => current.questionId === uuid);
	const isCorrect = correctAnswersArray.some((current) => {
		// EN
		if (current.language === Languages.EN) {
			if (current.content === answer) {
				return true;
			}
		}

		// JP
		if (current.language === Languages.JP) {
			if (current.gana === answer || current.romanji) {
				return true;
			}
		}
	});

	return isCorrect;
}
