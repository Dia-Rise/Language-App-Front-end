//! CURRENTLY THERE IS NO API OR DATABASE.
//! TYPICALLY A FETCH REQUEST WOULD BE CALLED.
//! BUT UNTIL A BACKEND HAS BEEN CREATED, THIS FUNCTION WILL JUST FILTER AN ARRAY.

import { conjugationExceptions } from "../../data/words/conjugationExceptions";
import { ConjugationExceptionType } from "../../types";

export type getExceptionsByDictionaryIdResponse = ConjugationExceptionType[];

export function getExceptionsByDictionaryId(uuid: string): getExceptionsByDictionaryIdResponse {
	return conjugationExceptions.filter((current) => current.dictionaryId === uuid);
}
