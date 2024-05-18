import { Verbs } from "../../classes/verbs";

export type WordModalProps = {
	word: Verbs;
};

export function WordModal({ word }: WordModalProps) {
	return <div>{word.masuForm.PastAffirmative.furigana}</div>;
}
