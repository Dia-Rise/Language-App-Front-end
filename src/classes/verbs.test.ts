import "@testing-library/jest-dom";
import { conjugationGroupType, WordType } from "../types";
import { Verbs } from "./verbs";

type expectedResultsType = {
	label: string;
	convertion: string;
	gana: string;
	romanji: string;
};

const wordData: WordType[] = [
	{
		id: "1",
		type: "verb",
		verbType: "ru",
		meaning: "To eat",
		dictionary: {
			gana: "たべる",
			romanji: "taberu",
		},
	},
	{
		id: "1",
		type: "verb",
		verbType: "u",
		meaning: "To buy",
		dictionary: {
			gana: "かう",
			romanji: "kau",
		},
	},
	{
		id: "1",
		type: "verb",
		verbType: "u",
		meaning: "To wait",
		dictionary: {
			gana: "まつ",
			romanji: "matsu",
		},
	},
	{
		id: "1",
		type: "verb",
		verbType: "u",
		meaning: "To take",
		dictionary: {
			gana: "とる",
			romanji: "toru",
		},
	},
	{
		id: "1",
		type: "verb",
		verbType: "u",
		meaning: "To drink",
		dictionary: {
			gana: "のむ",
			romanji: "nomu",
		},
	},
	{
		id: "1",
		type: "verb",
		verbType: "u",
		meaning: "To die",
		dictionary: {
			gana: "しぬ",
			romanji: "shinu",
		},
	},
	{
		id: "1",
		type: "verb",
		verbType: "u",
		meaning: "To play",
		dictionary: {
			gana: "あそぶ",
			romanji: "asobu",
		},
	},
	{
		id: "1",
		type: "verb",
		verbType: "u",
		meaning: "To write",
		dictionary: {
			gana: "かく",
			romanji: "kaku",
		},
	},
	{
		id: "1",
		type: "verb",
		verbType: "u",
		meaning: "To swim",
		dictionary: {
			gana: "およぐ",
			romanji: "oyogu",
		},
	},
	{
		id: "1",
		type: "verb",
		verbType: "u",
		meaning: "To speak",
		dictionary: {
			gana: "はなす",
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
				gana: "たべて",
				romanji: "tabete",
			},
			{
				label: "う -> って",
				convertion: teFormConjugationGroups.group2,
				gana: "かって",
				romanji: "katte",
			},
			{
				label: "つ -> って",
				convertion: teFormConjugationGroups.group2,
				gana: "まって",
				romanji: "matte",
			},
			{
				label: "る -> って",
				convertion: teFormConjugationGroups.group2,
				gana: "とって",
				romanji: "totte",
			},
			{
				label: "む -> んで",
				convertion: teFormConjugationGroups.group3,
				gana: "のんで",
				romanji: "nonde",
			},
			{
				label: "ぬ -> んで",
				convertion: teFormConjugationGroups.group3,
				gana: "しんで",
				romanji: "shinde",
			},
			{
				label: "ぶ -> んで",
				convertion: teFormConjugationGroups.group3,
				gana: "あそんで",
				romanji: "asonde",
			},
			{
				label: "く -> いて",
				convertion: teFormConjugationGroups.group4,
				gana: "かいて",
				romanji: "kaite",
			},
			{
				label: "ぐ -> いで",
				convertion: teFormConjugationGroups.group5,
				gana: "およいで",
				romanji: "oyoide",
			},
			{
				label: "す -> して",
				convertion: teFormConjugationGroups.group6,
				gana: "はなして",
				romanji: "hanashite",
			},
		];

		wordData.forEach((current, index) => {
			test(`${expectedResultsData[index].label}`, () => {
				const wordClass = new Verbs(current);

				expect(wordClass.teForm.convertion).toBe(expectedResultsData[index].convertion);
				expect(wordClass.teForm.gana).toBe(expectedResultsData[index].gana);
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
					gana: "たべます",
					romanji: "tabemasu",
				},
				negative: {
					convertion: "る",
					gana: "たべません",
					romanji: "tabemasen",
				},
				pastAffirmative: {
					convertion: "る",
					gana: "たべました",
					romanji: "tabemashita",
				},
				pastNegative: {
					convertion: "る",
					gana: "たべませんでした",
					romanji: "tabemasendeshita",
				},
			},
			{
				label: "う -> iます",
				affirmative: {
					convertion: "う",
					gana: "かいます",
					romanji: "kaimasu",
				},
				negative: {
					convertion: "う",
					gana: "かいません",
					romanji: "kaimasen",
				},
				pastAffirmative: {
					convertion: "う",
					gana: "かいました",
					romanji: "kaimashita",
				},
				pastNegative: {
					convertion: "う",
					gana: "かいませんでした",
					romanji: "kaimasendeshita",
				},
			},
			{
				label: "う -> iます",
				affirmative: {
					convertion: "う",
					gana: "まちます",
					romanji: "machimasu",
				},
				negative: {
					convertion: "う",
					gana: "まちません",
					romanji: "machimasen",
				},
				pastAffirmative: {
					convertion: "う",
					gana: "まちました",
					romanji: "machimashita",
				},
				pastNegative: {
					convertion: "う",
					gana: "まちませんでした",
					romanji: "machimasendeshita",
				},
			},
			{
				label: "う -> iます",
				affirmative: {
					convertion: "う",
					gana: "とります",
					romanji: "torimasu",
				},
				negative: {
					convertion: "う",
					gana: "とりません",
					romanji: "torimasen",
				},
				pastAffirmative: {
					convertion: "う",
					gana: "とりました",
					romanji: "torimashita",
				},
				pastNegative: {
					convertion: "う",
					gana: "とりませんでした",
					romanji: "torimasendeshita",
				},
			},
			{
				label: "う -> iます",
				affirmative: {
					convertion: "う",
					gana: "のみます",
					romanji: "nomimasu",
				},
				negative: {
					convertion: "う",
					gana: "のみません",
					romanji: "nomimasen",
				},
				pastAffirmative: {
					convertion: "う",
					gana: "のみました",
					romanji: "nomimashita",
				},
				pastNegative: {
					convertion: "う",
					gana: "のみませんでした",
					romanji: "nomimasendeshita",
				},
			},
			{
				label: "う -> iます",
				affirmative: {
					convertion: "う",
					gana: "しにます",
					romanji: "shinimasu",
				},
				negative: {
					convertion: "う",
					gana: "しにません",
					romanji: "shinimasen",
				},
				pastAffirmative: {
					convertion: "う",
					gana: "しにました",
					romanji: "shinimashita",
				},
				pastNegative: {
					convertion: "う",
					gana: "しにませんでした",
					romanji: "shinimasendeshita",
				},
			},
			{
				label: "う -> iます",
				affirmative: {
					convertion: "う",
					gana: "あそびます",
					romanji: "asobimasu",
				},
				negative: {
					convertion: "う",
					gana: "あそびません",
					romanji: "asobimasen",
				},
				pastAffirmative: {
					convertion: "う",
					gana: "あそびました",
					romanji: "asobimashita",
				},
				pastNegative: {
					convertion: "う",
					gana: "あそびませんでした",
					romanji: "asobimasendeshita",
				},
			},
			{
				label: "う -> iます",
				affirmative: {
					convertion: "う",
					gana: "かきます",
					romanji: "kakimasu",
				},
				negative: {
					convertion: "う",
					gana: "かきません",
					romanji: "kakimasen",
				},
				pastAffirmative: {
					convertion: "う",
					gana: "かきました",
					romanji: "kakimashita",
				},
				pastNegative: {
					convertion: "う",
					gana: "かきませんでした",
					romanji: "kakimasendeshita",
				},
			},
			{
				label: "う -> iます",
				affirmative: {
					convertion: "う",
					gana: "およぎます",
					romanji: "oyogimasu",
				},
				negative: {
					convertion: "う",
					gana: "およぎません",
					romanji: "oyogimasen",
				},
				pastAffirmative: {
					convertion: "う",
					gana: "およぎました",
					romanji: "oyogimashita",
				},
				pastNegative: {
					convertion: "う",
					gana: "およぎませんでした",
					romanji: "oyogimasendeshita",
				},
			},
			{
				label: "う -> iます",
				affirmative: {
					convertion: "う",
					gana: "はなします",
					romanji: "hanashimasu",
				},
				negative: {
					convertion: "う",
					gana: "はなしません",
					romanji: "hanashimasen",
				},
				pastAffirmative: {
					convertion: "う",
					gana: "はなしました",
					romanji: "hanashimashita",
				},
				pastNegative: {
					convertion: "う",
					gana: "はなしませんでした",
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
					expect(value.gana).toBe(expectedResultsData[index][key as keyof conjugationGroupType].gana);
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
					gana: "たべる",
					romanji: "taberu",
				},
				negative: {
					gana: "たべない",
					romanji: "tabenai",
				},
				pastAffirmative: {
					gana: "たべた",
					romanji: "tabeta",
				},
				pastNegative: {
					gana: "たべなかった",
					romanji: "tabenakatta",
				},
			},
			{
				label: "",
				affirmative: {
					gana: "かう",
					romanji: "kau",
				},
				negative: {
					gana: "かわない",
					romanji: "kawanai",
				},
				pastAffirmative: {
					gana: "かった",
					romanji: "katta",
				},
				pastNegative: {
					gana: "かわなかった",
					romanji: "kawanakatta",
				},
			},
			{
				label: "",
				affirmative: {
					gana: "まつ",
					romanji: "matsu",
				},
				negative: {
					gana: "またない",
					romanji: "matanai",
				},
				pastAffirmative: {
					gana: "まった",
					romanji: "matta",
				},
				pastNegative: {
					gana: "またなかった",
					romanji: "matanakatta",
				},
			},
			{
				label: "",
				affirmative: {
					gana: "とる",
					romanji: "toru",
				},
				negative: {
					gana: "とらない",
					romanji: "toranai",
				},
				pastAffirmative: {
					gana: "とった",
					romanji: "totta",
				},
				pastNegative: {
					gana: "とらなかった",
					romanji: "toranakatta",
				},
			},
			{
				label: "",
				affirmative: {
					gana: "のむ",
					romanji: "nomu",
				},
				negative: {
					gana: "のまない",
					romanji: "nomanai",
				},
				pastAffirmative: {
					gana: "のんだ",
					romanji: "nonda",
				},
				pastNegative: {
					gana: "のまなかった",
					romanji: "nomanakatta",
				},
			},
			{
				label: "",
				affirmative: {
					gana: "しぬ",
					romanji: "shinu",
				},
				negative: {
					gana: "しなない",
					romanji: "shinanai",
				},
				pastAffirmative: {
					gana: "しんだ",
					romanji: "shinda",
				},
				pastNegative: {
					gana: "しななかった",
					romanji: "shinanakatta",
				},
			},
			{
				label: "",
				affirmative: {
					gana: "あそぶ",
					romanji: "asobu",
				},
				negative: {
					gana: "あそばない",
					romanji: "asobanai",
				},
				pastAffirmative: {
					gana: "あそんだ",
					romanji: "asonda",
				},
				pastNegative: {
					gana: "あそばなかった",
					romanji: "asobanakatta",
				},
			},
			{
				label: "",
				affirmative: {
					gana: "かく",
					romanji: "kaku",
				},
				negative: {
					gana: "かかない",
					romanji: "kakanai",
				},
				pastAffirmative: {
					gana: "かいた",
					romanji: "kaita",
				},
				pastNegative: {
					gana: "かかなかった",
					romanji: "kakanakatta",
				},
			},
			{
				label: "",
				affirmative: {
					gana: "およぐ",
					romanji: "oyogu",
				},
				negative: {
					gana: "およがない",
					romanji: "oyoganai",
				},
				pastAffirmative: {
					gana: "およいだ",
					romanji: "oyoida",
				},
				pastNegative: {
					gana: "およがなかった",
					romanji: "oyoganakatta",
				},
			},
			{
				label: "",
				affirmative: {
					gana: "はなす",
					romanji: "hanasu",
				},
				negative: {
					gana: "はなさない",
					romanji: "hanasanai",
				},
				pastAffirmative: {
					gana: "はなした",
					romanji: "hanashita",
				},
				pastNegative: {
					gana: "はなさなかった",
					romanji: "hanasanakatta",
				},
			},
		];

		wordData.forEach((current, index) => {
			test(`${expectedResultsData[index].label}`, () => {
				const wordClass = new Verbs(current);

				Object.entries(wordClass.shortForm).forEach(([key, value]) => {
					expect(value.gana).toBe(expectedResultsData[index][key as keyof conjugationGroupType].gana);
					expect(value.romanji).toBe(expectedResultsData[index][key as keyof conjugationGroupType].romanji);
				});
			});
		});
	});
});
