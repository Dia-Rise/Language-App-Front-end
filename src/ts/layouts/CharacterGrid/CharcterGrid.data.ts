import { Hira, Kata } from "../../enums";

type AlphabetType = {
	hiragana: Hira | "";
	katakana: Kata | "";
	romanji: string;
};

type test2 = {
	default: AlphabetType;
	dakuten?: AlphabetType;
	handakuten?: AlphabetType;
};

type test = {
	family: string;
	n: test2 | null;
	a: test2 | null;
	e: test2 | null;
	i: test2 | null;
	o: test2 | null;
	u: test2 | null;
};

export const CharacterGridData: test[] = [
	{
		family: "singular",
		n: null,
		a: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
			dakuten: {
				hiragana: Hira.E,
				katakana: Kata.E,
				romanji: "a",
			},
		},
		e: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
		},
		i: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
		},
		o: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
		},
		u: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
		},
	},
	{
		family: "singular",
		n: null,
		a: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
			dakuten: {
				hiragana: Hira.E,
				katakana: Kata.E,
				romanji: "a",
			},
		},
		e: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
		},
		i: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
		},
		o: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
		},
		u: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
		},
	},
	{
		family: "singular",
		n: null,
		a: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
			dakuten: {
				hiragana: Hira.E,
				katakana: Kata.E,
				romanji: "a",
			},
		},
		e: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
		},
		i: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
		},
		o: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
		},
		u: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
		},
	},
	{
		family: "singular",
		n: null,
		a: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
			dakuten: {
				hiragana: Hira.E,
				katakana: Kata.E,
				romanji: "a",
			},
		},
		e: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
		},
		i: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
		},
		o: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
		},
		u: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
		},
	},
	{
		family: "singular",
		n: null,
		a: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
			dakuten: {
				hiragana: Hira.E,
				katakana: Kata.E,
				romanji: "a",
			},
		},
		e: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
		},
		i: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
		},
		o: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
		},
		u: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
		},
	},
	{
		family: "singular",
		n: null,
		a: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
			dakuten: {
				hiragana: Hira.E,
				katakana: Kata.E,
				romanji: "a",
			},
		},
		e: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
		},
		i: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
		},
		o: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
		},
		u: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
		},
	},
	{
		family: "singular",
		n: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
		},
		a: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
			dakuten: {
				hiragana: Hira.E,
				katakana: Kata.E,
				romanji: "a",
			},
		},
		e: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
		},
		i: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
		},
		o: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
		},
		u: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
		},
	},
	{
		family: "singular",
		n: null,
		a: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
			dakuten: {
				hiragana: Hira.E,
				katakana: Kata.E,
				romanji: "a",
			},
		},
		e: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
		},
		i: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
		},
		o: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
		},
		u: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
		},
	},
	{
		family: "singular",
		n: null,
		a: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
			dakuten: {
				hiragana: Hira.E,
				katakana: Kata.E,
				romanji: "a",
			},
		},
		e: null,
		i: null,
		o: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
		},
		u: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
		},
	},
	{
		family: "singular",
		n: null,
		a: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
			dakuten: {
				hiragana: Hira.E,
				katakana: Kata.E,
				romanji: "a",
			},
		},
		e: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
		},
		i: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
		},
		o: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
		},
		u: {
			default: {
				hiragana: Hira.A,
				katakana: Kata.A,
				romanji: "a",
			},
		},
	},
];
