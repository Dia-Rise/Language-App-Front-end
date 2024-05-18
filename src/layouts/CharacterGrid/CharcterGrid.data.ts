import { Hira, Kata } from "../../enums";

type CharacterStringType = {
	hiragana: Hira | "";
	katakana: Kata | "";
	romanji: string;
};

type PronunciationType = {
	default: CharacterStringType;
	dakuten?: CharacterStringType;
	handakuten?: CharacterStringType;
};

export type CharacterGridDataType = {
	rowLabel: {
		default: string;
		dakuten?: string;
		handakuten?: string;
	};
	n?: PronunciationType | null;
	a?: PronunciationType | null;
	e?: PronunciationType | null;
	i?: PronunciationType | null;
	o?: PronunciationType | null;
	u?: PronunciationType | null;
};

export const CharacterGridData: CharacterGridDataType[] = [
	{
		rowLabel: {
			default: "",
		},
		a: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
		},
		e: {
			default: {
				hiragana: Hira.E,
				katakana: Kata.E,
				romanji: "e",
			},
		},
		i: {
			default: {
				hiragana: Hira.I,
				katakana: Kata.I,
				romanji: "i",
			},
		},
		o: {
			default: {
				hiragana: Hira.O,
				katakana: Kata.O,
				romanji: "o",
			},
		},
		u: {
			default: {
				hiragana: Hira.U,
				katakana: Kata.U,
				romanji: "u",
			},
		},
	},
	{
		// K
		rowLabel: {
			default: "K",
			dakuten: "G",
		},
		n: null,
		a: {
			default: {
				hiragana: Hira.KA,
				katakana: Kata.KA,
				romanji: "ka",
			},
			dakuten: {
				hiragana: Hira.GA,
				katakana: Kata.GA,
				romanji: "ga",
			},
		},
		e: {
			default: {
				hiragana: Hira.KE,
				katakana: Kata.KE,
				romanji: "ke",
			},
			dakuten: {
				hiragana: Hira.GE,
				katakana: Kata.GE,
				romanji: "ge",
			},
		},
		i: {
			default: {
				hiragana: Hira.KI,
				katakana: Kata.KI,
				romanji: "ki",
			},
			dakuten: {
				hiragana: Hira.GI,
				katakana: Kata.GI,
				romanji: "gi",
			},
		},
		o: {
			default: {
				hiragana: Hira.KO,
				katakana: Kata.KO,
				romanji: "ko",
			},
			dakuten: {
				hiragana: Hira.GO,
				katakana: Kata.GO,
				romanji: "go",
			},
		},
		u: {
			default: {
				hiragana: Hira.KU,
				katakana: Kata.KU,
				romanji: "ku",
			},
			dakuten: {
				hiragana: Hira.GU,
				katakana: Kata.GU,
				romanji: "gu",
			},
		},
	},
	{
		// S
		rowLabel: {
			default: "S",
			dakuten: "Z",
		},
		n: null,
		a: {
			default: {
				hiragana: Hira.SA,
				katakana: Kata.SA,
				romanji: "sa",
			},
			dakuten: {
				hiragana: Hira.ZA,
				katakana: Kata.ZA,
				romanji: "za",
			},
		},
		e: {
			default: {
				hiragana: Hira.SE,
				katakana: Kata.SE,
				romanji: "se",
			},
			dakuten: {
				hiragana: Hira.ZE,
				katakana: Kata.ZE,
				romanji: "za",
			},
		},
		i: {
			default: {
				hiragana: Hira.SHI,
				katakana: Kata.SHI,
				romanji: "shi",
			},
			dakuten: {
				hiragana: Hira.ZI,
				katakana: Kata.ZI,
				romanji: "ji",
			},
		},
		o: {
			default: {
				hiragana: Hira.SO,
				katakana: Kata.SO,
				romanji: "so",
			},
			dakuten: {
				hiragana: Hira.ZO,
				katakana: Kata.ZO,
				romanji: "zo",
			},
		},
		u: {
			default: {
				hiragana: Hira.SU,
				katakana: Kata.SU,
				romanji: "su",
			},
			dakuten: {
				hiragana: Hira.ZU,
				katakana: Kata.ZU,
				romanji: "zu",
			},
		},
	},
	{
		rowLabel: {
			default: "T",
			dakuten: "D",
		},
		n: null,
		a: {
			default: {
				hiragana: Hira.TA,
				katakana: Kata.TA,
				romanji: "ta",
			},
			dakuten: {
				hiragana: Hira.DA,
				katakana: Kata.DA,
				romanji: "da",
			},
		},
		e: {
			default: {
				hiragana: Hira.TE,
				katakana: Kata.TE,
				romanji: "te",
			},
			dakuten: {
				hiragana: Hira.DE,
				katakana: Kata.DE,
				romanji: "de",
			},
		},
		i: {
			default: {
				hiragana: Hira.CHI,
				katakana: Kata.CHI,
				romanji: "chi",
			},
			dakuten: {
				hiragana: Hira.DI,
				katakana: Kata.DI,
				romanji: "ji",
			},
		},
		o: {
			default: {
				hiragana: Hira.TO,
				katakana: Kata.TO,
				romanji: "to",
			},
			dakuten: {
				hiragana: Hira.DO,
				katakana: Kata.DO,
				romanji: "do",
			},
		},
		u: {
			default: {
				hiragana: Hira.TSU,
				katakana: Kata.TSU,
				romanji: "tsu",
			},
			dakuten: {
				hiragana: Hira.DU,
				katakana: Kata.DU,
				romanji: "zu",
			},
		},
	},
	{
		rowLabel: {
			default: "N",
		},
		n: {
			default: {
				hiragana: Hira.N,
				katakana: Kata.N,
				romanji: "n",
			},
		},
		a: {
			default: {
				hiragana: Hira.NA,
				katakana: Kata.NA,
				romanji: "na",
			},
		},
		e: {
			default: {
				hiragana: Hira.NE,
				katakana: Kata.NE,
				romanji: "ne",
			},
		},
		i: {
			default: {
				hiragana: Hira.NI,
				katakana: Kata.NI,
				romanji: "ni",
			},
		},
		o: {
			default: {
				hiragana: Hira.NO,
				katakana: Kata.NO,
				romanji: "no",
			},
		},
		u: {
			default: {
				hiragana: Hira.NU,
				katakana: Kata.NU,
				romanji: "nu",
			},
		},
	},
	{
		rowLabel: {
			default: "H",
			dakuten: "B",
			handakuten: "P",
		},
		a: {
			default: {
				hiragana: Hira.HA,
				katakana: Kata.HA,
				romanji: "ha",
			},
			dakuten: {
				hiragana: Hira.BA,
				katakana: Kata.BA,
				romanji: "ba",
			},
			handakuten: {
				hiragana: Hira.PA,
				katakana: Kata.PA,
				romanji: "pa",
			},
		},
		e: {
			default: {
				hiragana: Hira.HE,
				katakana: Kata.HE,
				romanji: "he",
			},
			dakuten: {
				hiragana: Hira.BE,
				katakana: Kata.BE,
				romanji: "be",
			},
			handakuten: {
				hiragana: Hira.PE,
				katakana: Kata.PE,
				romanji: "pe",
			},
		},
		i: {
			default: {
				hiragana: Hira.HI,
				katakana: Kata.HI,
				romanji: "hi",
			},
			dakuten: {
				hiragana: Hira.BI,
				katakana: Kata.BI,
				romanji: "bi",
			},
			handakuten: {
				hiragana: Hira.PI,
				katakana: Kata.PI,
				romanji: "pi",
			},
		},
		o: {
			default: {
				hiragana: Hira.HO,
				katakana: Kata.HO,
				romanji: "ho",
			},
			dakuten: {
				hiragana: Hira.BO,
				katakana: Kata.BO,
				romanji: "bo",
			},
			handakuten: {
				hiragana: Hira.PO,
				katakana: Kata.PO,
				romanji: "po",
			},
		},
		u: {
			default: {
				hiragana: Hira.FU,
				katakana: Kata.FU,
				romanji: "fu",
			},
			dakuten: {
				hiragana: Hira.BU,
				katakana: Kata.BU,
				romanji: "bu",
			},
			handakuten: {
				hiragana: Hira.PU,
				katakana: Kata.PU,
				romanji: "pu",
			},
		},
	},
	{
		rowLabel: {
			default: "M",
		},
		a: {
			default: {
				hiragana: Hira.MA,
				katakana: Kata.MA,
				romanji: "ma",
			},
		},
		e: {
			default: {
				hiragana: Hira.ME,
				katakana: Kata.ME,
				romanji: "me",
			},
		},
		i: {
			default: {
				hiragana: Hira.MI,
				katakana: Kata.MI,
				romanji: "mi",
			},
		},
		o: {
			default: {
				hiragana: Hira.MO,
				katakana: Kata.MO,
				romanji: "mo",
			},
		},
		u: {
			default: {
				hiragana: Hira.MU,
				katakana: Kata.MU,
				romanji: "mu",
			},
		},
	},
	{
		rowLabel: {
			default: "Y",
		},
		a: {
			default: {
				hiragana: Hira.YA,
				katakana: Kata.YA,
				romanji: "ya",
			},
		},
		o: {
			default: {
				hiragana: Hira.YO,
				katakana: Kata.YO,
				romanji: "yo",
			},
		},
		u: {
			default: {
				hiragana: Hira.YU,
				katakana: Kata.YU,
				romanji: "yu",
			},
		},
	},
	{
		rowLabel: {
			default: "R",
		},
		a: {
			default: {
				hiragana: Hira.RA,
				katakana: Kata.RA,
				romanji: "ra",
			},
		},
		e: {
			default: {
				hiragana: Hira.RE,
				katakana: Kata.RE,
				romanji: "re",
			},
		},
		i: {
			default: {
				hiragana: Hira.RI,
				katakana: Kata.RI,
				romanji: "ri",
			},
		},
		o: {
			default: {
				hiragana: Hira.RO,
				katakana: Kata.RO,
				romanji: "ro",
			},
		},
		u: {
			default: {
				hiragana: Hira.RU,
				katakana: Kata.RU,
				romanji: "ru",
			},
		},
	},
	{
		rowLabel: {
			default: "W",
		},
		a: {
			default: {
				hiragana: Hira.WA,
				katakana: Kata.WA,
				romanji: "wa",
			},
		},
		e: {
			default: {
				hiragana: "",
				katakana: Kata.WE,
				romanji: "we",
			},
		},
		i: {
			default: {
				hiragana: "",
				katakana: Kata.WI,
				romanji: "wi",
			},
		},
		o: {
			default: {
				hiragana: Hira.WO,
				katakana: Kata.WO,
				romanji: "wo",
			},
		},
	},
];
