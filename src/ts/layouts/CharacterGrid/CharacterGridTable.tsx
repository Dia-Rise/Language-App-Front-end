import { CharacterFrame } from "../../components";
import { Pronunciation, Alphabet } from "../../enums";
import { CharacterGridData } from "./CharcterGrid.data";

export type CharacterGridTableProps = {
	pronunciation: Pronunciation;
	alphabet: Alphabet;
};

export function CharacterGridTable({ pronunciation, alphabet }: CharacterGridTableProps) {
	function renderRows() {
		return CharacterGridData.map((current, index) => (
			<tr className="character-grid__row" key={index}>
				<td>
					<CharacterFrame
						character={current.n?.[pronunciation]?.[alphabet] ?? ""}
						subCharacter={current.n?.[pronunciation]?.romanji ?? ""}
					/>
				</td>
				<td>
					<CharacterFrame
						character={current.a?.[pronunciation]?.[alphabet] ?? ""}
						subCharacter={current.a?.[pronunciation]?.romanji ?? ""}
					/>
				</td>
				<td>
					<CharacterFrame
						character={current.e?.[pronunciation]?.[alphabet] ?? ""}
						subCharacter={current.e?.[pronunciation]?.romanji ?? ""}
					/>
				</td>
				<td>
					<CharacterFrame
						character={current.i?.[pronunciation]?.[alphabet] ?? ""}
						subCharacter={current.i?.[pronunciation]?.romanji ?? ""}
					/>
				</td>
				<td>
					<CharacterFrame
						character={current.o?.[pronunciation]?.[alphabet] ?? ""}
						subCharacter={current.o?.[pronunciation]?.romanji ?? ""}
					/>
				</td>
				<td>
					<CharacterFrame
						character={current.u?.[pronunciation]?.[alphabet] ?? ""}
						subCharacter={current.u?.[pronunciation]?.romanji ?? ""}
					/>
				</td>
				<th>{current.rowLabel?.[pronunciation] ?? current.rowLabel.default}</th>
			</tr>
		));
	}

	return (
		<table className="character-grid__table">
			<tr className="character-grid__row">
				<th></th>
				<th>A</th>
				<th>E</th>
				<th>I</th>
				<th>O</th>
				<th>U</th>
			</tr>
			{renderRows()}
		</table>
	);
}
