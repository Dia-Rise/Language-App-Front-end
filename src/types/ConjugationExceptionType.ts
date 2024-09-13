import { ConjugationType } from "../enums";

export type ConjugationExceptionType = {
	id: string;
	dictionaryId: string;
	wordType: "verb" | "adjective" | "noun" | "thing";
	exceptionType: ConjugationType;
	gana: string;
	romanji: string;
};
