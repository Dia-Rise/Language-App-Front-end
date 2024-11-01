import { Languages, QuizQuestionTypes } from "../enums";
import { enContentType } from "./enContentType";
import { jpContentType } from "./jpContentType";
import { QuizAnswerType } from "./QuizAnswerType";

export type QuizQuestionLanguageType =
	| ({ language: Languages.EN } & enContentType)
	| ({ language: Languages.JP } & jpContentType);

export type QuizQuestionCommonType = {
	id: string;
	questionType: QuizQuestionTypes;
	categories: string[];
	possibleAnswers: QuizAnswerType[];
};

export type QuizQuestionType = QuizQuestionCommonType & QuizQuestionLanguageType;

// export type QuizQuestionType = {
// 	id: string;
// 	categories: string[];
// 	questionType: QuizQuestionTypes;

// 	// kanji: string | null;
// 	gana: string | null;
// 	romanji: string | null;
// 	english: string | null;

// 	possibleAnswers: (string | number | boolean)[];
// };
