import { useEffect, useState } from "react";
import { Modal, Spinner } from "../../components";
import { createWordClass } from "../../utilities";
import { Verbs, Adjectives, Nouns } from "../../classes";
import { WordType } from "../../types";
import { WordModalVerb } from "./WordModalVerbs";
import { WordModalAdjectives } from "./WordModalAdjectives";
import { WordModalHeader } from "./WordModalHeader";

export type WordModalProps = {
	isOpen: boolean;
	onClose: () => void;
	word: WordType;
};

export function WordModal({ isOpen, onClose, word }: WordModalProps) {
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
			return <WordModalAdjectives word={word} />;
		} else {
			return <></>;
		}
	}

	const baseClassName = "word-modal";

	return (
		<Modal className={baseClassName} {...{ isOpen, onClose }}>
			<div className={`${baseClassName}__wrapper`}>
				<WordModalHeader {...{ word }} />
				{words ? getWordModelByClass(words) : <Spinner />}
			</div>
		</Modal>
	);
}
