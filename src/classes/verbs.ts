import { ConjugationType } from "../enums";
import { ConjugationExceptionType, WordType } from "../types";
import { convertFuriganaToRomanji } from "../utilities";

export class Verbs {
	private _dictionaryWord: WordType["dictionary"];
	private _teForm: {
		furigana: string;
		romanji: string;
		convertion: string;
	};

	constructor(word: WordType, exceptions?: ConjugationExceptionType[]) {
		this._dictionaryWord = word.dictionary;

		this._teForm = this.decipherException(exceptions, ConjugationType.TeForm) ?? this.convertToTeForm(word);
	}

	get teForm(): { furigana: string; romanji: string; convertion: string } {
		return this._teForm;
	}

	get masuForm(): string {
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
}
