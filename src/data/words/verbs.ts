//TODO - Finalize this type
export type wordType = {
	meaning: string;
	type: "ru" | "u" | "irregular";
	conjugation: {
		dictionary: {
			kanji: string;
			furigana: string;
			romanji: string;
			example?: string;
		};
		[key: string]: {
			kanji: string;
			furigana: string;
			romanji: string;
			example?: string;
		};
	};
};

export const verbs: wordType[] = [
	{
		meaning: "To Speak",
		type: "ru",
		conjugation: {
			dictionary: {
				kanji: "",
				furigana: "",
				romanji: "",
			},
			teForm: {
				kanji: "",
				furigana: "",
				romanji: "",
			},
		},
	},
];
