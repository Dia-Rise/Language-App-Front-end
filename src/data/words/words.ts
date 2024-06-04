import { WordType } from "../../types";
import { adjectives } from "./adjectives";
import { verbs } from "./verbs";

//THIS ARRAY WILL CONTAIN ALL VERBS, ADJECTIVES AND NOUNS.
//IT IS DONE THIS WAY FOR SIMPLICITY.

export const words: WordType[] = [...verbs, ...adjectives]
