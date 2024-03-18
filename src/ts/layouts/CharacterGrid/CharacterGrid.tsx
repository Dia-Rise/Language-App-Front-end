import { useState } from "react";
import { Alphabet } from "../../enums/Alphabet";
import { Pronunciation } from "../../enums";
import { CharacterGridControls } from "./CharacterGridControls";
import { CharacterGridTable } from "./CharacterGridTable";

// export type CharacterGridProps = {};

export function CharacterGrid() {
	const [alphabet, setAlphabet] = useState<Alphabet>(Alphabet.Hiragana);
	const [pronunciation, setPronunciation] = useState<Pronunciation>(Pronunciation.Default);
	const [highlightedRow, setHighlightedRow] = useState<string | null>(null);
	const [highlightedColumn, setHighlightedColumn] = useState<string | null>(null);

	function toggleAlphabet() {
		setAlphabet(alphabet === Alphabet.Katagana ? Alphabet.Hiragana : Alphabet.Katagana);
	}

	function changePronunciation(value: Pronunciation) {
		setPronunciation(value);
	}

	return (
		<div className="character-grid">
			<CharacterGridControls {...{ alphabet, toggleAlphabet, pronunciation, changePronunciation }} />
			<CharacterGridTable
				{...{
					alphabet,
					pronunciation,
					highlightedColumn,
					setHighlightedColumn,
					highlightedRow,
					setHighlightedRow,
				}}
			/>
		</div>
	);
}
