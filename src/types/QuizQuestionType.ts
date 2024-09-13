import { QuizQuestionTypes } from "../enums";

//TODO - rethink this data type.
// If 'questionType' is 'ENTranslation' the the system should use 'english'
// This feild may not be filled on all questions.

export type QuizQuestionType = {
	id: string;
	categories: string[];
	questionType: QuizQuestionTypes;

	// kanji: string | null;
	gana: string | null;
	romanji: string | null;
	english: string | null;

	possibleAnswers: (string | number | boolean)[];
};
