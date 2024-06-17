import { ConjugationType } from "../enums";
import { ConjugationExceptionType, conjugationGroupType, conjugationResultType, WordType } from "../types";

export class Adjectives {
	private _dictionaryWord: WordType["dictionary"];
	private _meaning: WordType["meaning"];

	private _teForm: conjugationResultType;
	private _tense: conjugationGroupType;
	private _shortForm: conjugationGroupType;

	constructor(word: WordType, exceptions?: ConjugationExceptionType[]) {
		this._dictionaryWord = word.dictionary;
		this._meaning = word.meaning;

		this._teForm = this.convertToTeForm(word, exceptions);
		this._tense = this.convertToTense(word, exceptions);
		this._shortForm = this.convertToShortForm(word, exceptions);
	}

	get dictionaryForm(): WordType["dictionary"] {
		return this._dictionaryWord;
	}

	get meaning(): WordType["meaning"] {
		return this._meaning;
	}

	get teForm(): conjugationResultType {
		return this._teForm;
	}

	get tense(): conjugationGroupType {
		return this._tense;
	}

	get shortForm(): conjugationGroupType {
		return this._shortForm;
	}

	private decipherException(exceptionArray: ConjugationExceptionType[] | undefined, type: ConjugationType) {
		if (exceptionArray) {
			const exception = exceptionArray.find((current) => current.exceptionType === type);

			if (exception) {
				return {
					furigana: exception.furigana,
					romanji: exception.romanji,
					convertion: "exception",
				};
			}
		}

		return null;
	}

	//* Te Form - Start *//
	private convertToTeForm(dictionaryForm: WordType, exceptions?: ConjugationExceptionType[]) {
		if (dictionaryForm.type !== "adjective")
			throw Error(`Adjectives - convertToTeForm() - Wrong word type has been given '${dictionaryForm.type}'`);

		const { dictionary } = dictionaryForm;

		if (dictionaryForm.adjectiveType === "i") {
			// い Adjectives
			const jpRoot = dictionary.furigana.substring(0, dictionary.furigana.lastIndexOf("い"));
			const enRoot = dictionary.romanji.substring(0, dictionary.romanji.lastIndexOf("i"));

			return (
				this.decipherException(exceptions, ConjugationType.TeForm) ?? {
					furigana: jpRoot + "くて",
					romanji: enRoot + "kute",
					convertion: `い → くて`,
				}
			);
		} else {
			// な Adjectives
			return (
				this.decipherException(exceptions, ConjugationType.TeForm) ?? {
					furigana: dictionary.furigana + "で",
					romanji: dictionary.romanji + "de",
					convertion: `な → で`,
				}
			);
		}
	}
	//* Te Form - End *//

	//* Tense - Start *//
	private convertToTense(dictionaryForm: WordType, exceptions?: ConjugationExceptionType[]) {
		if (dictionaryForm.type !== "adjective")
			throw Error(`Adjectives - convertToTense() - Wrong word type has been given '${dictionaryForm.type}'`);

		const { dictionary } = dictionaryForm;

		if (dictionaryForm.adjectiveType === "i") {
			// い Adjectives
			const jpRoot = dictionary.furigana.substring(0, dictionary.furigana.lastIndexOf("い"));
			const enRoot = dictionary.romanji.substring(0, dictionary.romanji.lastIndexOf("i"));

			return {
				affirmative: this.decipherException(exceptions, ConjugationType.AdjAffirmative) ?? {
					furigana: dictionary.furigana + " です",
					romanji: dictionary.romanji + " desu",
				},
				negative: this.decipherException(exceptions, ConjugationType.AdjNegative) ?? {
					furigana: jpRoot + "くない です",
					romanji: enRoot + "kunai desu",
				},
				pastAffirmative: this.decipherException(exceptions, ConjugationType.AdjPastAffirmative) ?? {
					furigana: jpRoot + "かった です",
					romanji: enRoot + "katta desu",
				},
				pastNegative: this.decipherException(exceptions, ConjugationType.AdjPastNegative) ?? {
					furigana: jpRoot + "くなかった です",
					romanji: enRoot + "kunakatta desu",
				},
			};
		} else {
			// な Adjectives
			return {
				affirmative: this.decipherException(exceptions, ConjugationType.AdjAffirmative) ?? {
					furigana: dictionary.furigana + " です",
					romanji: dictionary.romanji + " desu",
				},
				negative: this.decipherException(exceptions, ConjugationType.AdjNegative) ?? {
					furigana: dictionary.furigana + "じゃない です",
					romanji: dictionary.romanji + "jyanai desu",
				},
				pastAffirmative: this.decipherException(exceptions, ConjugationType.AdjPastAffirmative) ?? {
					furigana: dictionary.furigana + " でした",
					romanji: dictionary.romanji + " deshita",
				},
				pastNegative: this.decipherException(exceptions, ConjugationType.AdjPastNegative) ?? {
					furigana: dictionary.furigana + "じゃなかった です",
					romanji: dictionary.romanji + "jyanakatta desu",
				},
			};
		}
	}
	//* Tense - End *//

	//* ShortForm - Start *//
	private convertToShortForm(dictionaryForm: WordType, exceptions?: ConjugationExceptionType[]) {
		if (dictionaryForm.type !== "adjective")
			throw Error(`Adjectives - convertToShortForm() - Wrong word type has been given '${dictionaryForm.type}'`);

		const { dictionary } = dictionaryForm;

		if (dictionaryForm.adjectiveType === "i") {
			// い Adjectives
			const jpRoot = dictionary.furigana.substring(0, dictionary.furigana.lastIndexOf("い"));
			const enRoot = dictionary.romanji.substring(0, dictionary.romanji.lastIndexOf("i"));

			return {
				affirmative: this.decipherException(exceptions, ConjugationType.ShortFormAffirmative) ?? {
					furigana: dictionary.furigana,
					romanji: dictionary.romanji,
				},
				negative: this.decipherException(exceptions, ConjugationType.ShortFormNegative) ?? {
					furigana: jpRoot + "くない",
					romanji: enRoot + "kunai",
				},
				pastAffirmative: this.decipherException(exceptions, ConjugationType.ShortFormPastAffirmative) ?? {
					furigana: jpRoot + "かった",
					romanji: enRoot + "katta",
				},
				pastNegative: this.decipherException(exceptions, ConjugationType.ShortFormPastNegative) ?? {
					furigana: jpRoot + "くなかった",
					romanji: enRoot + "kunakatta",
				},
			};
		} else {
			// な Adjectives
			return {
				affirmative: this.decipherException(exceptions, ConjugationType.ShortFormAffirmative) ?? {
					furigana: dictionary.furigana + "た",
					romanji: dictionary.romanji + "ta",
				},
				negative: this.decipherException(exceptions, ConjugationType.ShortFormNegative) ?? {
					furigana: dictionary.furigana + "じゃない",
					romanji: dictionary.romanji + "jyanai",
				},
				pastAffirmative: this.decipherException(exceptions, ConjugationType.ShortFormPastAffirmative) ?? {
					furigana: dictionary.furigana + "だった",
					romanji: dictionary.romanji + " datta",
				},
				pastNegative: this.decipherException(exceptions, ConjugationType.ShortFormPastNegative) ?? {
					furigana: dictionary.furigana + "じゃなかった",
					romanji: dictionary.romanji + "jyanakatta",
				},
			};
		}
	}
	//* Short Form - End *//
}
