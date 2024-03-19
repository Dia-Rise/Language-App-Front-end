import { Hira, Kata } from "../enums";

type AlphabetType = {
	hiragana: Hira | "";
	katakana: Kata | "";
	romanji: string;
};

// type test = {
// 	default: AlphabetType;
// 	dakuten?: AlphabetType;
// 	handakuten?: AlphabetType;
// };

export const Alphabet: AlphabetType[] = [
	{
		hiragana: Hira.A,
		katakana: Kata.A,
		romanji: "a",
	},
	{
		hiragana: Hira.E,
		katakana: Kata.E,
		romanji: "e",
	},
	{
		hiragana: Hira.I,
		katakana: Kata.I,
		romanji: "i",
	},
	{
		hiragana: Hira.O,
		katakana: Kata.O,
		romanji: "o",
	},
	{
		hiragana: Hira.U,
		katakana: Kata.U,
		romanji: "u",
	},
	{
		hiragana: Hira.KA,
		katakana: Kata.KA,
		romanji: "ka",
	},
	{
		hiragana: Hira.KE,
		katakana: Kata.KE,
		romanji: "ke",
	},
	{
		hiragana: Hira.KI,
		katakana: Kata.KI,
		romanji: "ki",
	},
	{
		hiragana: Hira.KO,
		katakana: Kata.KO,
		romanji: "ko",
	},
	{
		hiragana: Hira.KU,
		katakana: Kata.KU,
		romanji: "ku",
	},
	{
		hiragana: Hira.SA,
		katakana: Kata.SA,
		romanji: "sa",
	},
	{
		hiragana: Hira.SE,
		katakana: Kata.SE,
		romanji: "se",
	},
	{
		hiragana: Hira.SHI,
		katakana: Kata.SHI,
		romanji: "shi",
	},
	{
		hiragana: Hira.SO,
		katakana: Kata.SO,
		romanji: "so",
	},
	{
		hiragana: Hira.SU,
		katakana: Kata.SU,
		romanji: "su",
	},
	{
		hiragana: Hira.TA,
		katakana: Kata.SA,
		romanji: "ta",
	},
	{
		hiragana: Hira.TE,
		katakana: Kata.TE,
		romanji: "te",
	},
	{
		hiragana: Hira.CHI,
		katakana: Kata.CHI,
		romanji: "chi",
	},
	{
		hiragana: Hira.TO,
		katakana: Kata.TO,
		romanji: "to",
	},
	{
		hiragana: Hira.TSU,
		katakana: Kata.TSU,
		romanji: "tsu",
	},
	{
		hiragana: Hira.N,
		katakana: Kata.N,
		romanji: "n",
	},
	{
		hiragana: Hira.NA,
		katakana: Kata.NA,
		romanji: "na",
	},
	{
		hiragana: Hira.NE,
		katakana: Kata.NE,
		romanji: "ne",
	},
	{
		hiragana: Hira.NI,
		katakana: Kata.NI,
		romanji: "ni",
	},
	{
		hiragana: Hira.NO,
		katakana: Kata.NO,
		romanji: "no",
	},
	{
		hiragana: Hira.NU,
		katakana: Kata.NU,
		romanji: "nu",
	},
	{
		hiragana: Hira.HA,
		katakana: Kata.HA,
		romanji: "ha",
	},
	{
		hiragana: Hira.HE,
		katakana: Kata.HE,
		romanji: "he",
	},
	{
		hiragana: Hira.HI,
		katakana: Kata.HI,
		romanji: "hi",
	},
	{
		hiragana: Hira.HO,
		katakana: Kata.HO,
		romanji: "ho",
	},
	{
		hiragana: Hira.FU,
		katakana: Kata.FU,
		romanji: "fu",
	},
	{
		hiragana: Hira.MA,
		katakana: Kata.MA,
		romanji: "ma",
	},
	{
		hiragana: Hira.ME,
		katakana: Kata.ME,
		romanji: "me",
	},
	{
		hiragana: Hira.MI,
		katakana: Kata.MI,
		romanji: "mi",
	},
	{
		hiragana: Hira.MO,
		katakana: Kata.MO,
		romanji: "mo",
	},
	{
		hiragana: Hira.MU,
		katakana: Kata.MU,
		romanji: "mu",
	},
	{
		hiragana: Hira.RA,
		katakana: Kata.RA,
		romanji: "ra",
	},
	{
		hiragana: Hira.RE,
		katakana: Kata.RE,
		romanji: "re",
	},
	{
		hiragana: Hira.RI,
		katakana: Kata.RI,
		romanji: "ri",
	},
	{
		hiragana: Hira.RO,
		katakana: Kata.RO,
		romanji: "ro",
	},
	{
		hiragana: Hira.RU,
		katakana: Kata.RU,
		romanji: "ru",
	},
	{
		hiragana: Hira.YA,
		katakana: Kata.YA,
		romanji: "ya",
	},
	{
		hiragana: Hira.YO,
		katakana: Kata.YO,
		romanji: "yo",
	},
	{
		hiragana: Hira.YU,
		katakana: Kata.YU,
		romanji: "yu",
	},
	{
		hiragana: Hira.WA,
		katakana: Kata.WA,
		romanji: "wa",
	},
	{
		hiragana: "",
		katakana: Kata.WE,
		romanji: "we",
	},
	{
		hiragana: "",
		katakana: Kata.WI,
		romanji: "wi",
	},
	{
		hiragana: Hira.WO,
		katakana: Kata.WO,
		romanji: "wo",
	},
];
