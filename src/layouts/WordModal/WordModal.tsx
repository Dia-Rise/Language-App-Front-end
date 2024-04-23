import { useEffect, useState } from "react";
import { Modal } from "../../components";
import { WordType } from "../../types/WordType";
import { Verbs } from "../../classes/verbs";
import { createWordClass } from "../../utilities";

export type WordModalProps = {
	word: WordType;
};

export function WordModal({ word }: WordModalProps) {
	const [words, setWord] = useState<Verbs | null>();

	words?.teForm;

	useEffect(() => {
		(async () => {
			setWord(await createWordClass(word));
		})();
	}, [word]);

	return (
		<Modal className="word-modal" isOpen={true} onClose={() => {}}>
			hello world
			{words && <>{words.teForm.romanji}</>}
		</Modal>
	);
}
