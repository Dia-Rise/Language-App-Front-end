//! CURRENTLY THERE IS NO API OR DATABASE.
//! TYPICALLY A FETCH REQUEST WOULD BE CALLED.
//! BUT UNTIL A BACKEND HAS BEEN CREATED, THIS FUNCTION WILL JUST FILTER AN ARRAY.

import { words } from "../../data/words/words";
import { WordType } from "../../types";

export type getWordByStringResponse = WordType[];

//TODO - ADD FILTERS
export function getWordByString(value: string): getWordByStringResponse {
	return words.filter(
		(current) =>
			current.dictionary.furigana.toLowerCase().includes(value.toLowerCase()) ||
			current.dictionary.romanji.toLowerCase().includes(value.toLowerCase()) ||
			current.meaning.toLowerCase().includes(value.toLowerCase())
	);
}
