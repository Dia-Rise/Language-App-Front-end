import { Verbs } from "../classes/verbs";
import { getExceptionsByDictionaryId, getExceptionsByDictionaryIdResponse } from "../resources";
import { WordType } from "../types";

export async function createWordClass(word: WordType) {
	const exceptions: getExceptionsByDictionaryIdResponse = getExceptionsByDictionaryId(word.id); // 'await' goes here.

	switch (word.type) {
		case "verb":
			return new Verbs(word, exceptions);
		case "adjective":
			return null;
		case "noun":
			return null;
		case "thing":
			return null;
	}
}
