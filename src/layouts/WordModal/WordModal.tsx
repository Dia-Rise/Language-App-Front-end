import { useEffect, useState } from "react";
import { Modal, Spinner } from "../../components";
import { createWordClass } from "../../utilities";
import { Verbs, Adjectives, Nouns } from "../../classes";
import { WordType } from "../../types";
import { WordModalVerb } from "./WordModalVerbs";

export type WordModalProps = {
	word: WordType;
};

export function WordModal({ word }: WordModalProps) {
	const [words, setWord] = useState<Verbs | Adjectives | Nouns | null>();

	useEffect(() => {
		(async () => {
			setWord(await createWordClass(word));
		})();
	}, [word]);

	function getWordModelByClass(word: Verbs | Adjectives | Nouns) {
		if (word instanceof Verbs) {
			return <WordModalVerb word={word} />;
		} else if (word instanceof Adjectives) {
			return <>Remember to create adjective class.</>;
		} else if (word instanceof Nouns) {
			return <>Remember to create noun class.</>;
		}
	}

	return (
		<Modal className="word-modal" isOpen={true} onClose={() => {}}>
			{words ? getWordModelByClass(words) : <Spinner />}
		</Modal>
	);
}
