import { ConjugationType } from "../enums";
import { ConjugationExceptionType, conjugationGroupType, conjugationResultType, WordType } from "../types";
import { convertGanaToRomanji, convertGanaToCharacterEquivalent } from "../utilities";

export class Verbs {
	private _dictionaryWord: WordType["dictionary"];
	private _meaning: WordType["meaning"];

	private _teForm: conjugationResultType;
	private _masuForm: conjugationGroupType;
	private _shortForm: conjugationGroupType;

	constructor(word: WordType, exceptions?: ConjugationExceptionType[]) {
		this._dictionaryWord = word.dictionary;
		this._meaning = word.meaning;

		this._teForm = this.decipherException(exceptions, ConjugationType.TeForm) ?? this.convertToTeForm(word);
		this._masuForm = this.convertToMasuForm(word, exceptions);
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

	get masuForm(): conjugationGroupType {
		return this._masuForm;
	}

	get shortForm(): conjugationGroupType {
		return this._shortForm;
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

	//* TE FORM - START *//
	private convertToTeForm(dictionaryForm: WordType) {
		if (dictionaryForm.type !== "verb")
			throw Error(`Verb - convertToTeForm() - Wrong word type has been given '${dictionaryForm.type}'`);

		const { dictionary } = dictionaryForm;

		let conjugationGroup: string | null = null;
		let teGana: string | null = null;
		let teRomanji: string | null = null;

		if (dictionaryForm.verbType === "irregular") {
			conjugationGroup = `Irregular`;
			switch (dictionary.gana) {
				case "する":
					teGana = "して";
					teRomanji = "shite";
					break;
				case "くる":
					teGana = "きて";
					teRomanji = "kite";
					break;
				default:
					throw Error(
						`Verb - convertToTeForm() - Word is incorrectly set as an 'irregular' verb.'${dictionary.romanji}'`
					);
			}
		} else {
			const rootSuffix = dictionary.gana.slice(-1);
			const rootWord = dictionary.gana.substring(0, dictionary.gana.length - 1);

			const romanjiSuffix = convertGanaToRomanji(rootSuffix);
			const romanjiRoot = dictionary.romanji.slice(0, dictionary.romanji.lastIndexOf(romanjiSuffix));

			let teSuffix: { jp: string; en: string } | null = null;

			switch (dictionaryForm.verbType) {
				case "ru":
					teSuffix = { jp: "て", en: "te" };
					conjugationGroup = `る → て`;
					break;
				case "u":
					if (rootSuffix === "う" || rootSuffix === "つ" || rootSuffix === "る") {
						teSuffix = { jp: "って", en: "tte" };
						conjugationGroup = `う つ る → って`;
					} else if (rootSuffix === "む" || rootSuffix === "ぬ" || rootSuffix === "ぶ") {
						teSuffix = { jp: "んで", en: "nde" };
						conjugationGroup = `む ぬ ぶ → んで`;
					} else if (rootSuffix === "く") {
						teSuffix = { jp: "いて", en: "ite" };
						conjugationGroup = `く → いて`;
					} else if (rootSuffix === "ぐ") {
						teSuffix = { jp: "いで", en: "ide" };
						conjugationGroup = `ぐ → いで`;
					} else if (rootSuffix === "す") {
						teSuffix = { jp: "して", en: "shite" };
						conjugationGroup = `す → して`;
					} else {
						throw Error(
							`Verb - convertToTeForm() - Word is set as 'u' verb but dosen't have the correct ending characters. '${dictionary.romanji}'`
						);
					}
					break;
			}

			teGana = rootWord + teSuffix.jp;
			teRomanji = romanjiRoot + teSuffix.en;
		}

		return {
			gana: teGana,
			romanji: teRomanji,
			convertion: conjugationGroup,
		};
	}
	//* TE FORM - END *//

	//* MASU FORM - START *//
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
			switch (dictionary.gana) {
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
			const rootSuffix = dictionary.gana.slice(-1);
			const rootWord = dictionary.gana.substring(0, dictionary.gana.length - 1);
			const romanjiSuffix = convertGanaToRomanji(rootSuffix);
			const romanjiRoot = dictionary.romanji.slice(0, dictionary.romanji.lastIndexOf(romanjiSuffix));

			conjugationGroup = `る`;
			root = { jp: rootWord, en: romanjiRoot };
		} else if (verbType === "u") {
			conjugationGroup = `う`;

			const originalSuffix = dictionary.gana.slice(-1);
			const newSuffix = convertGanaToCharacterEquivalent(originalSuffix, "i");
			const originalRomanjiSuffix = convertGanaToRomanji(originalSuffix);
			const newRomanjiSuffix = convertGanaToRomanji(newSuffix);

			const rootWord = dictionary.gana.substring(0, dictionary.gana.length - 1) + newSuffix;
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
					gana: root.jp + affirmativeSuffix.jp,
					romanji: root.en + affirmativeSuffix.en,
					convertion: conjugationGroup,
				},
				negative: this.decipherException(exceptions, ConjugationType.MasuFormNegative) ?? {
					gana: root.jp + negativeSuffix.jp,
					romanji: root.en + negativeSuffix.en,
					convertion: conjugationGroup,
				},
				pastAffirmative: this.decipherException(exceptions, ConjugationType.MasuFormPastAffirmative) ?? {
					gana: root.jp + pastAffirmativeSuffix.jp,
					romanji: root.en + pastAffirmativeSuffix.en,
					convertion: conjugationGroup,
				},
				pastNegative: this.decipherException(exceptions, ConjugationType.MasuFormPastNegative) ?? {
					gana: root.jp + pastNegativeSuffix.jp,
					romanji: root.en + pastNegativeSuffix.en,
					convertion: conjugationGroup,
				},
			};
		}

		throw Error(
			`Verb - convertToMasuForm() - Root word could not be converted for some reason. ${dictionary.romanji}'`
		);
	}
	//* MASU FORM - END *//

	//* SHORT FORM - START *//
	private convertToShortForm(dictionaryForm: WordType, exceptions?: ConjugationExceptionType[]) {
		if (dictionaryForm.type !== "verb")
			throw Error(`Verb - convertToShortForm() - Wrong word type has been given '${dictionaryForm.type}'`);

		const { dictionary, verbType } = dictionaryForm;

		//Present Negative
		function convertToPresentNegative() {
			if (verbType === "irregular") {
				switch (dictionary.gana) {
					case "する":
						return { gana: "しない", romanji: "shinai" };
					case "くる":
						return { gana: "こない", romanji: "konai" };
					default:
						throw Error(
							`Verb - convertToMasuForm() - Word is incorrectly set as an 'irregular' verb.'${dictionary.romanji}'`
						);
				}
			} else if (verbType === "ru") {
				//jp
				const rootSuffix = dictionary.gana.slice(-1);
				const rootWord = dictionary.gana.substring(0, dictionary.gana.length - 1) + "ない";

				//en
				const romanjiSuffix = convertGanaToRomanji(rootSuffix);
				const romanjiRoot = dictionary.romanji.slice(0, dictionary.romanji.lastIndexOf(romanjiSuffix)) + "nai";

				return {
					gana: rootWord,
					romanji: romanjiRoot,
				};
			} else {
				//jp
				const originalSuffix = dictionary.gana.slice(-1);
				const newSuffix =
					originalSuffix === "う" ? "わ" : convertGanaToCharacterEquivalent(originalSuffix, "a");
				const rootWord = dictionary.gana.substring(0, dictionary.gana.length - 1) + newSuffix + "ない";

				//en
				const originalRomanjiSuffix = convertGanaToRomanji(originalSuffix);
				const newRomanjiSuffix = convertGanaToRomanji(newSuffix);
				const romanjiRoot =
					dictionary.romanji.slice(0, dictionary.romanji.lastIndexOf(originalRomanjiSuffix)) +
					newRomanjiSuffix +
					"nai";

				return {
					gana: rootWord,
					romanji: romanjiRoot,
				};
			}
		}

		//Past Affirmative
		const teForm = this.convertToTeForm(dictionaryForm);
		function convertToPastAffirmative() {
			if (verbType === "irregular") {
				switch (dictionary.gana) {
					case "する":
						return { gana: "した", romanji: "shita" };
					case "くる":
						return { gana: "きた", romanji: "kita" };
					default:
						throw Error(
							`Verb - convertToMasuForm() - Word is incorrectly set as an 'irregular' verb.'${dictionary.romanji}'`
						);
				}
			} else {
				//jp
				const rootSuffix = teForm.gana.slice(-1);
				const newSuffix = rootSuffix === "で" ? "だ" : "た";
				const rootWord = teForm.gana.substring(0, teForm.gana.length - 1) + newSuffix;

				//en
				const romanjiSuffix = convertGanaToRomanji(rootSuffix);
				const newRomanjiSuffix = convertGanaToRomanji(newSuffix);
				const romanjiRoot =
					teForm.romanji.slice(0, teForm.romanji.lastIndexOf(romanjiSuffix)) + newRomanjiSuffix;

				return {
					gana: rootWord,
					romanji: romanjiRoot,
				};
			}
		}

		//Past Negative
		function convertToPastNegative() {
			if (verbType === "irregular") {
				switch (dictionary.gana) {
					case "する":
						return { gana: "しなかった", romanji: "shinakatta" };
					case "くる":
						return { gana: "こなかった", romanji: "konakatta" };
					default:
						throw Error(
							`Verb - convertToMasuForm() - Word is incorrectly set as an 'irregular' verb.'${dictionary.romanji}'`
						);
				}
			} else if (verbType === "ru") {
				//jp
				const rootSuffix = dictionary.gana.slice(-1);
				const rootWord = dictionary.gana.substring(0, dictionary.gana.length - 1) + "なかった";

				//en
				const romanjiSuffix = convertGanaToRomanji(rootSuffix);
				const romanjiRoot =
					dictionary.romanji.slice(0, dictionary.romanji.lastIndexOf(romanjiSuffix)) + "nakatta";

				return {
					gana: rootWord,
					romanji: romanjiRoot,
				};
			} else {
				//jp
				const originalSuffix = dictionary.gana.slice(-1);
				const newSuffix =
					originalSuffix === "う" ? "わ" : convertGanaToCharacterEquivalent(originalSuffix, "a");
				const rootWord =
					dictionary.gana.substring(0, dictionary.gana.length - 1) + newSuffix + "なかった";

				//en
				const originalRomanjiSuffix = convertGanaToRomanji(originalSuffix);
				const newRomanjiSuffix = convertGanaToRomanji(newSuffix);
				const romanjiRoot =
					dictionary.romanji.slice(0, dictionary.romanji.lastIndexOf(originalRomanjiSuffix)) +
					newRomanjiSuffix +
					"nakatta";

				return {
					gana: rootWord,
					romanji: romanjiRoot,
				};
			}
		}

		return {
			affirmative: this.decipherException(exceptions, ConjugationType.ShortFormAffirmative) ?? {
				gana: dictionary.gana,
				romanji: dictionary.romanji,
			},
			negative:
				this.decipherException(exceptions, ConjugationType.ShortFormNegative) ?? convertToPresentNegative(),
			pastAffirmative:
				this.decipherException(exceptions, ConjugationType.ShortFormPastAffirmative) ??
				convertToPastAffirmative(),
			pastNegative:
				this.decipherException(exceptions, ConjugationType.ShortFormPastNegative) ?? convertToPastNegative(),
		};

		throw Error(
			`Verb - convertToMasuForm() - Root word could not be converted for some reason. ${dictionary.romanji}'`
		);
	}
	//* SHORT FORM - END *//
}
