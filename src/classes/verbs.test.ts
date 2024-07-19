import "@testing-library/jest-dom";
import { conjugationGroupType, WordType } from "../types";
import { Verbs } from "./verbs";

type expectedResultsType = {
	label: string;
	convertion: string;
	furigana: string;
	romanji: string;
};

const wordData: WordType[] = [
	{
		id: "1",
		type: "verb",
		verbType: "ru",
		meaning: "To eat",
		dictionary: {
			furigana: "たべる",
			romanji: "taberu",
		},
	},
	{
		id: "1",
		type: "verb",
		verbType: "u",
		meaning: "To buy",
		dictionary: {
			furigana: "かう",
			romanji: "kau",
		},
	},
	{
		id: "1",
		type: "verb",
		verbType: "u",
		meaning: "To wait",
		dictionary: {
			furigana: "まつ",
			romanji: "matsu",
		},
	},
	{
		id: "1",
		type: "verb",
		verbType: "u",
		meaning: "To take",
		dictionary: {
			furigana: "とる",
			romanji: "toru",
		},
	},
	{
		id: "1",
		type: "verb",
		verbType: "u",
		meaning: "To drink",
		dictionary: {
			furigana: "のむ",
			romanji: "nomu",
		},
	},
	{
		id: "1",
		type: "verb",
		verbType: "u",
		meaning: "To die",
		dictionary: {
			furigana: "しぬ",
			romanji: "shinu",
		},
	},
	{
		id: "1",
		type: "verb",
		verbType: "u",
		meaning: "To play",
		dictionary: {
			furigana: "あそぶ",
			romanji: "asobu",
		},
	},
	{
		id: "1",
		type: "verb",
		verbType: "u",
		meaning: "To write",
		dictionary: {
			furigana: "かく",
			romanji: "kaku",
		},
	},
	{
		id: "1",
		type: "verb",
		verbType: "u",
		meaning: "To swim",
		dictionary: {
			furigana: "およぐ",
			romanji: "oyogu",
		},
	},
	{
		id: "1",
		type: "verb",
		verbType: "u",
		meaning: "To speak",
		dictionary: {
			furigana: "はなす",
			romanji: "hanasu",
		},
	},
];

describe("Verb conjugation class.", () => {
	describe("TE form - conjugation", () => {
		const teFormConjugationGroups = {
			group1: "る → て",
			group2: "う つ る → って",
			group3: "む ぬ ぶ → んで",
			group4: "く → いて",
			group5: "ぐ → いで",
			group6: "す → して",
		};

		//The Index should match the 'wordData' array at the top of the file.
		const expectedResultsData: expectedResultsType[] = [
			{
				label: "る -> て",
				convertion: teFormConjugationGroups.group1,
				furigana: "たべて",
				romanji: "tabete",
			},
			{
				label: "う -> って",
				convertion: teFormConjugationGroups.group2,
				furigana: "かって",
				romanji: "katte",
			},
			{
				label: "つ -> って",
				convertion: teFormConjugationGroups.group2,
				furigana: "まって",
				romanji: "matte",
			},
			{
				label: "る -> って",
				convertion: teFormConjugationGroups.group2,
				furigana: "とって",
				romanji: "totte",
			},
			{
				label: "む -> んで",
				convertion: teFormConjugationGroups.group3,
				furigana: "のんで",
				romanji: "nonde",
			},
			{
				label: "ぬ -> んで",
				convertion: teFormConjugationGroups.group3,
				furigana: "しんで",
				romanji: "shinde",
			},
			{
				label: "ぶ -> んで",
				convertion: teFormConjugationGroups.group3,
				furigana: "あそんで",
				romanji: "asonde",
			},
			{
				label: "く -> いて",
				convertion: teFormConjugationGroups.group4,
				furigana: "かいて",
				romanji: "kaite",
			},
			{
				label: "ぐ -> いで",
				convertion: teFormConjugationGroups.group5,
				furigana: "およいで",
				romanji: "oyoide",
			},
			{
				label: "す -> して",
				convertion: teFormConjugationGroups.group6,
				furigana: "はなして",
				romanji: "hanashite",
			},
		];

		wordData.forEach((current, index) => {
			test(`${expectedResultsData[index].label}`, () => {
				const wordClass = new Verbs(current);

				expect(wordClass.teForm.convertion).toBe(expectedResultsData[index].convertion);
				expect(wordClass.teForm.furigana).toBe(expectedResultsData[index].furigana);
				expect(wordClass.teForm.romanji).toBe(expectedResultsData[index].romanji);
			});
		});
	});

	describe("MASU From - conjugation", () => {
		const expectedResultsData: conjugationGroupType[] & { label: string }[] = [
			{
				label: "る -> ます",
				affirmative: {
					convertion: "る",
					furigana: "たべます",
					romanji: "tabemasu",
				},
				negative: {
					convertion: "る",
					furigana: "たべません",
					romanji: "tabemasen",
				},
				pastAffirmative: {
					convertion: "る",
					furigana: "たべました",
					romanji: "tabemashita",
				},
				pastNegative: {
					convertion: "る",
					furigana: "たべませんでした",
					romanji: "tabemasendeshita",
				},
			},
			{
				label: "う -> iます",
				affirmative: {
					convertion: "う",
					furigana: "かいます",
					romanji: "kaimasu",
				},
				negative: {
					convertion: "う",
					furigana: "かいません",
					romanji: "kaimasen",
				},
				pastAffirmative: {
					convertion: "う",
					furigana: "かいました",
					romanji: "kaimashita",
				},
				pastNegative: {
					convertion: "う",
					furigana: "かいませんでした",
					romanji: "kaimasendeshita",
				},
			},
			{
				label: "う -> iます",
				affirmative: {
					convertion: "う",
					furigana: "まちます",
					romanji: "machimasu",
				},
				negative: {
					convertion: "う",
					furigana: "まちません",
					romanji: "machimasen",
				},
				pastAffirmative: {
					convertion: "う",
					furigana: "まちました",
					romanji: "machimashita",
				},
				pastNegative: {
					convertion: "う",
					furigana: "まちませんでした",
					romanji: "machimasendeshita",
				},
			},
			{
				label: "う -> iます",
				affirmative: {
					convertion: "う",
					furigana: "とります",
					romanji: "torimasu",
				},
				negative: {
					convertion: "う",
					furigana: "とりません",
					romanji: "torimasen",
				},
				pastAffirmative: {
					convertion: "う",
					furigana: "とりました",
					romanji: "torimashita",
				},
				pastNegative: {
					convertion: "う",
					furigana: "とりませんでした",
					romanji: "torimasendeshita",
				},
			},
			{
				label: "う -> iます",
				affirmative: {
					convertion: "う",
					furigana: "のみます",
					romanji: "nomimasu",
				},
				negative: {
					convertion: "う",
					furigana: "のみません",
					romanji: "nomimasen",
				},
				pastAffirmative: {
					convertion: "う",
					furigana: "のみました",
					romanji: "nomimashita",
				},
				pastNegative: {
					convertion: "う",
					furigana: "のみませんでした",
					romanji: "nomimasendeshita",
				},
			},
			{
				label: "う -> iます",
				affirmative: {
					convertion: "う",
					furigana: "しにます",
					romanji: "shinimasu",
				},
				negative: {
					convertion: "う",
					furigana: "しにません",
					romanji: "shinimasen",
				},
				pastAffirmative: {
					convertion: "う",
					furigana: "しにました",
					romanji: "shinimashita",
				},
				pastNegative: {
					convertion: "う",
					furigana: "しにませんでした",
					romanji: "shinimasendeshita",
				},
			},
			{
				label: "う -> iます",
				affirmative: {
					convertion: "う",
					furigana: "あそびます",
					romanji: "asobimasu",
				},
				negative: {
					convertion: "う",
					furigana: "あそびません",
					romanji: "asobimasen",
				},
				pastAffirmative: {
					convertion: "う",
					furigana: "あそびました",
					romanji: "asobimashita",
				},
				pastNegative: {
					convertion: "う",
					furigana: "あそびませんでした",
					romanji: "asobimasendeshita",
				},
			},
			{
				label: "う -> iます",
				affirmative: {
					convertion: "う",
					furigana: "かきます",
					romanji: "kakimasu",
				},
				negative: {
					convertion: "う",
					furigana: "かきません",
					romanji: "kakimasen",
				},
				pastAffirmative: {
					convertion: "う",
					furigana: "かきました",
					romanji: "kakimashita",
				},
				pastNegative: {
					convertion: "う",
					furigana: "かきませんでした",
					romanji: "kakimasendeshita",
				},
			},
			{
				label: "う -> iます",
				affirmative: {
					convertion: "う",
					furigana: "およぎます",
					romanji: "oyogimasu",
				},
				negative: {
					convertion: "う",
					furigana: "およぎません",
					romanji: "oyogimasen",
				},
				pastAffirmative: {
					convertion: "う",
					furigana: "およぎました",
					romanji: "oyogimashita",
				},
				pastNegative: {
					convertion: "う",
					furigana: "およぎませんでした",
					romanji: "oyogimasendeshita",
				},
			},
			{
				label: "う -> iます",
				affirmative: {
					convertion: "う",
					furigana: "はなします",
					romanji: "hanashimasu",
				},
				negative: {
					convertion: "う",
					furigana: "はなしません",
					romanji: "hanashimasen",
				},
				pastAffirmative: {
					convertion: "う",
					furigana: "はなしました",
					romanji: "hanashimashita",
				},
				pastNegative: {
					convertion: "う",
					furigana: "はなしませんでした",
					romanji: "hanashimasendeshita",
				},
			},
		];

		wordData.forEach((current, index) => {
			test(`${expectedResultsData[index].label}`, () => {
				const wordClass = new Verbs(current);

				Object.entries(wordClass.masuForm).forEach(([key, value]) => {
					expect(value.convertion).toBe(
						expectedResultsData[index][key as keyof conjugationGroupType].convertion
					);
					expect(value.furigana).toBe(expectedResultsData[index][key as keyof conjugationGroupType].furigana);
					expect(value.romanji).toBe(expectedResultsData[index][key as keyof conjugationGroupType].romanji);
				});
			});
		});
	});

	describe("Short From - conjugation", () => {
		const expectedResultsData: conjugationGroupType[] & { label: string }[] = [
			{
				label: "",
				affirmative: {
					furigana: "たべる",
					romanji: "taberu",
				},
				negative: {
					furigana: "たべない",
					romanji: "tabenai",
				},
				pastAffirmative: {
					furigana: "たべた",
					romanji: "tabeta",
				},
				pastNegative: {
					furigana: "たべなかった",
					romanji: "tabenakatta",
				},
			},
			{
				label: "",
				affirmative: {
					furigana: "かう",
					romanji: "kau",
				},
				negative: {
					furigana: "かわない",
					romanji: "kawanai",
				},
				pastAffirmative: {
					furigana: "かった",
					romanji: "katta",
				},
				pastNegative: {
					furigana: "かわなかった",
					romanji: "kawanakatta",
				},
			},
			{
				label: "",
				affirmative: {
					furigana: "まつ",
					romanji: "matsu",
				},
				negative: {
					furigana: "またない",
					romanji: "matanai",
				},
				pastAffirmative: {
					furigana: "まった",
					romanji: "matta",
				},
				pastNegative: {
					furigana: "またなかった",
					romanji: "matanakatta",
				},
			},
			{
				label: "",
				affirmative: {
					furigana: "とる",
					romanji: "toru",
				},
				negative: {
					furigana: "とらない",
					romanji: "toranai",
				},
				pastAffirmative: {
					furigana: "とった",
					romanji: "totta",
				},
				pastNegative: {
					furigana: "とらなかった",
					romanji: "toranakatta",
				},
			},
			{
				label: "",
				affirmative: {
					furigana: "のむ",
					romanji: "nomu",
				},
				negative: {
					furigana: "のまない",
					romanji: "nomanai",
				},
				pastAffirmative: {
					furigana: "のんだ",
					romanji: "nonda",
				},
				pastNegative: {
					furigana: "のまなかった",
					romanji: "nomanakatta",
				},
			},
			{
				label: "",
				affirmative: {
					furigana: "しぬ",
					romanji: "shinu",
				},
				negative: {
					furigana: "しなない",
					romanji: "shinanai",
				},
				pastAffirmative: {
					furigana: "しんだ",
					romanji: "shinda",
				},
				pastNegative: {
					furigana: "しななかった",
					romanji: "shinanakatta",
				},
			},
			{
				label: "",
				affirmative: {
					furigana: "あそぶ",
					romanji: "asobu",
				},
				negative: {
					furigana: "あそばない",
					romanji: "asobanai",
				},
				pastAffirmative: {
					furigana: "あそんだ",
					romanji: "asonda",
				},
				pastNegative: {
					furigana: "あそばなかった",
					romanji: "asobanakatta",
				},
			},
			{
				label: "",
				affirmative: {
					furigana: "かく",
					romanji: "kaku",
				},
				negative: {
					furigana: "かかない",
					romanji: "kakanai",
				},
				pastAffirmative: {
					furigana: "かいた",
					romanji: "kaita",
				},
				pastNegative: {
					furigana: "かかなかった",
					romanji: "kakanakatta",
				},
			},
			{
				label: "",
				affirmative: {
					furigana: "およぐ",
					romanji: "oyogu",
				},
				negative: {
					furigana: "およがない",
					romanji: "oyoganai",
				},
				pastAffirmative: {
					furigana: "およいだ",
					romanji: "oyoida",
				},
				pastNegative: {
					furigana: "およがなかった",
					romanji: "oyoganakatta",
				},
			},
			{
				label: "",
				affirmative: {
					furigana: "はなす",
					romanji: "hanasu",
				},
				negative: {
					furigana: "はなさない",
					romanji: "hanasanai",
				},
				pastAffirmative: {
					furigana: "はなした",
					romanji: "hanashita",
				},
				pastNegative: {
					furigana: "はなさなかった",
					romanji: "hanasanakatta",
				},
			},
		];

		wordData.forEach((current, index) => {
			test(`${expectedResultsData[index].label}`, () => {
				const wordClass = new Verbs(current);

				Object.entries(wordClass.shortForm).forEach(([key, value]) => {
					expect(value.furigana).toBe(expectedResultsData[index][key as keyof conjugationGroupType].furigana);
					expect(value.romanji).toBe(expectedResultsData[index][key as keyof conjugationGroupType].romanji);
				});
			});
		});
	});
});
