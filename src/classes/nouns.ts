import { ConjugationType } from "../enums";
import { ConjugationExceptionType, WordType } from "../types";

export class Nouns {
	private _dictionaryWord: WordType["dictionary"];

	// private _teForm: conjugationResultType;
	// private _masuForm: conjugationGroupType;
	// private _shortForm: conjugationGroupType;

	constructor(word: WordType, exceptions?: ConjugationExceptionType[]) {
		this._dictionaryWord = word.dictionary;
	}

	get teForm(): string {
		return "";
	}

	get masuForm(): string {
		return "";
	}

	get shortForm(): string {
		return "";
	}

	private decipherException(exceptionArray: ConjugationExceptionType[] | undefined, type: ConjugationType) {
		if (exceptionArray) {
			const exception = exceptionArray.find((current) => current.exceptionType === type);

			if (exception) {
				return {
					gana: exception.gana,
					romanji: exception.romanji,
					convertion: "exception",
				};
			}
		}

		return null;
	}
}
