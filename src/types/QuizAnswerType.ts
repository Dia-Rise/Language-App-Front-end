import { Languages } from "../enums";
import { enContentType } from "./enContentType";
import { jpContentType } from "./jpContentType";

export type QuizAnswerLanguageType =
	| ({ language: Languages.EN } & enContentType)
	| ({ language: Languages.JP } & jpContentType);

type QuizAnswerCommonType = {
	id: string;
	questionId: string;
	explanation?: string;
}

export type QuizAnswerType = QuizAnswerCommonType & QuizAnswerLanguageType;
