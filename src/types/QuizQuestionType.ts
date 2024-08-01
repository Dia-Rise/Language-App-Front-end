import { QuizQuestionTypes } from "../enums";

export type QuizQuestionType = {
	id: string;
	questionType: QuizQuestionTypes;
	// kanji: string
	furigana: string;
	romanji: string;
	correctAnswers: (string | number | boolean)[];
};
