import { useEffect, useState } from "react";
import { Modal, Spinner } from "../../components";
import { WordType } from "../../types/WordType";
import { Verbs } from "../../classes/verbs";
import { createWordClass } from "../../utilities";

export type WordModalProps = {
	word: WordType;
};

export function WordModal({ word }: WordModalProps) {
	const [words, setWord] = useState<Verbs | null>();

	useEffect(() => {
		(async () => {
			setWord(await createWordClass(word));
		})();
	}, [word]);

	return (
		<Modal className="word-modal" isOpen={true} onClose={() => {}}>
			{words ? <div>{words.masuForm.affirmative.furigana}</div> : <Spinner />}
		</Modal>
	);
}
