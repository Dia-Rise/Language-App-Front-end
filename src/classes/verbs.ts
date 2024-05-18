import { ConjugationType } from "../enums";
import { ConjugationExceptionType, WordType } from "../types";
import { convertFuriganaToRomanji, convertFuriganaToCharacterEquivalent } from "../utilities";

type conjugationResultType = {
	furigana: string;
	romanji: string;
	convertion: string;
};

type conjugationGroupType = {
	affirmative: conjugationResultType;
	negative: conjugationResultType;
	PastAffirmative: conjugationResultType;
	PastNegative: conjugationResultType;
};

export class Verbs {
	private _dictionaryWord: WordType["dictionary"];

	private _teForm: conjugationResultType;
	private _masuForm: conjugationGroupType;
	// private _shortForm: conjugationGroupType;

	constructor(word: WordType, exceptions?: ConjugationExceptionType[]) {
		this._dictionaryWord = word.dictionary;

		this._teForm = this.decipherException(exceptions, ConjugationType.TeForm) ?? this.convertToTeForm(word);
		this._masuForm = this.convertToMasuForm(word);
	}

	get teForm(): conjugationResultType {
		return this._teForm;
	}

	get masuForm(): conjugationGroupType {
		return this._masuForm;
	}

	get shortForm(): string {
		return "";
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

	private convertToTeForm(dictionaryForm: WordType) {
		if (dictionaryForm.type !== "verb")
			throw Error(`Verb - convertToTeForm() - Wrong word type has been given '${dictionaryForm.type}'`);

		const { dictionary } = dictionaryForm;

		let conjugationGroup: string | null = null;
		let teFurigana: string | null = null;
		let teRomanji: string | null = null;

		if (dictionaryForm.verbType === "irregular") {
			conjugationGroup = `irregular`;
			switch (dictionary.furigana) {
				case "する":
					teFurigana = "して";
					teRomanji = "shite";
					break;
				case "くる":
					teFurigana = "きて";
					teRomanji = "kite";
					break;
				default:
					throw Error(
						`Verb - convertToTeForm() - Word is incorrectly set as an 'irregular' verb.'${dictionary.romanji}'`
					);
			}
		} else {
			const rootSuffix = dictionary.furigana.slice(-1);
			const rootWord = dictionary.furigana.substring(0, dictionary.furigana.length - 1);

			const romanjiSuffix = convertFuriganaToRomanji(rootSuffix);
			const romanjiRoot = dictionary.romanji.slice(0, dictionary.romanji.lastIndexOf(romanjiSuffix));

			let teSuffix: { jp: string; en: string } | null = null;

			switch (dictionaryForm.verbType) {
				case "ru":
					teSuffix = { jp: "て", en: "te" };
					conjugationGroup = `る`;
					break;
				case "u":
					if (rootSuffix === ("う" || "つ" || "る")) {
						teSuffix = { jp: "って", en: "tte" };
						conjugationGroup = `う つ る`;
					} else if (rootSuffix === ("む" || "ぬ" || "ぶ")) {
						teSuffix = { jp: "んで", en: "nde" };
						conjugationGroup = `む ぬ ぶ`;
					} else if (rootSuffix === "く") {
						teSuffix = { jp: "いて", en: "ite" };
						conjugationGroup = `く`;
					} else if (rootSuffix === "ぐ") {
						teSuffix = { jp: "いで", en: "ide" };
						conjugationGroup = `ぐ`;
					} else if (rootSuffix === "す") {
						teSuffix = { jp: "して", en: "shite" };
						conjugationGroup = `す`;
					} else {
						throw Error(
							`Verb - convertToTeForm() - Word is set as 'u' verb but dosen't have the correct ending characters. '${dictionary.romanji}'`
						);
					}
					break;
			}

			teFurigana = rootWord + teSuffix.jp;
			teRomanji = romanjiRoot + teSuffix.en;
		}

		return {
			furigana: teFurigana,
			romanji: teRomanji,
			convertion: conjugationGroup,
		};
	}

	private convertToMasuForm(dictionaryForm: WordType, exceptions?: ConjugationExceptionType[]): conjugationGroupType {
		if (dictionaryForm.type !== "verb")
			throw Error(`Verb - convertToMasuForm() - Wrong word type has been given '${dictionaryForm.type}'`);

		const { dictionary, verbType } = dictionaryForm;

		let conjugationGroup: string | null = null;
		let root: { jp: string; en: string } | null = null;

		const affirmativeSuffix = { jp: "ます", en: "masu" };
		const negativeSuffix = { jp: "ません", en: "masen" };
		const pastAffirmativeSuffix = { jp: "ました", en: "mashita" };
		const pastNegativeSuffix = { jp: "ませんでした", en: "masendeshita" };

		if (verbType === "irregular") {
			conjugationGroup = `irregular`;
			switch (dictionary.furigana) {
				case "する":
					root = { jp: "し", en: "shi" };
					break;
				case "くる":
					root = { jp: "き", en: "ki" };
					break;
				default:
					throw Error(
						`Verb - convertToMasuForm() - Word is incorrectly set as an 'irregular' verb.'${dictionary.romanji}'`
					);
			}
		} else if (verbType === "ru") {
			const rootSuffix = dictionary.furigana.slice(-1);
			const rootWord = dictionary.furigana.substring(0, dictionary.furigana.length - 1);
			const romanjiSuffix = convertFuriganaToRomanji(rootSuffix);
			const romanjiRoot = dictionary.romanji.slice(0, dictionary.romanji.lastIndexOf(romanjiSuffix));

			conjugationGroup = `る`;
			root = { jp: rootWord, en: romanjiRoot };
		} else if (verbType === "u") {
			conjugationGroup = `う`;

			const originalSuffix = dictionary.furigana.slice(-1);
			const newSuffix = convertFuriganaToCharacterEquivalent(originalSuffix, "i");
			const originalRomanjiSuffix = convertFuriganaToRomanji(originalSuffix);
			const newRomanjiSuffix = convertFuriganaToRomanji(newSuffix);

			const rootWord = dictionary.furigana.substring(0, dictionary.furigana.length - 1) + newSuffix;
			const romanjiRoot =
				dictionary.romanji.slice(0, dictionary.romanji.lastIndexOf(originalRomanjiSuffix)) + newRomanjiSuffix;

			root = {
				jp: rootWord,
				en: romanjiRoot,
			};
		}

		if (root && conjugationGroup) {
			return {
				affirmative: this.decipherException(exceptions, ConjugationType.MasuFormAffirmative) ?? {
					furigana: root.jp + affirmativeSuffix.jp,
					romanji: root.en + affirmativeSuffix.en,
					convertion: conjugationGroup,
				},
				negative: this.decipherException(exceptions, ConjugationType.MasuFormNegative) ?? {
					furigana: root.jp + negativeSuffix.jp,
					romanji: root.en + affirmativeSuffix.en,
					convertion: conjugationGroup,
				},
				PastAffirmative: this.decipherException(exceptions, ConjugationType.MasuFormPastAffirmative) ?? {
					furigana: root.jp + pastAffirmativeSuffix.jp,
					romanji: root.en + affirmativeSuffix.en,
					convertion: conjugationGroup,
				},
				PastNegative: this.decipherException(exceptions, ConjugationType.MasuFormPastNegative) ?? {
					furigana: root.jp + pastNegativeSuffix.jp,
					romanji: root.en + affirmativeSuffix.en,
					convertion: conjugationGroup,
				},
			};
		}

		throw Error(
			`Verb - convertToMasuForm() - Root word could not be converted for some reason. ${dictionary.romanji}'`
		);
	}

	// private convertToShortForm(dictionaryForm: WordType) {
	// 	if (dictionaryForm.type !== "verb")
	// 		throw Error(`Verb - convertToShortForm() - Wrong word type has been given '${dictionaryForm.type}'`);

	// 	const { dictionary, verbType } = dictionaryForm;

	// 	// if (verbType === "irregular") {

	// 	// } else if (verbType === "ru") {

	// 	// } else if (verbType === "u") {

	// 	// }

	// 	return;
	// }
}
