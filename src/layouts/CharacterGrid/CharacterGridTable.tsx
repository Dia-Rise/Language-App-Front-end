import { CharacterFrame } from "../../components/CharacterFrame/CharacterFrame";
import { Pronunciation, Alphabet } from "../../enums";
import { CharacterGridData, CharacterGridDataType } from "./CharcterGrid.data";

export type CharacterGridTableProps = {
	pronunciation: Pronunciation;
	alphabet: Alphabet;
	highlightedColumn: string | null;
	setHighlightedColumn: (value: string | null) => void;
	highlightedRow: string | null;
	setHighlightedRow: (value: string | null) => void;
};

export function CharacterGridTable({
	pronunciation,
	alphabet,
	highlightedColumn,
	setHighlightedColumn,
	highlightedRow,
	setHighlightedRow,
}: CharacterGridTableProps) {
	function highlightCheck(column: string, row: string) {
		return highlightedColumn === column || highlightedRow === row;
	}

	function applyHighlight(column: string, row: string) {
		setHighlightedColumn(column);
		setHighlightedRow(row);
	}

	function removeHighlight() {
		setHighlightedColumn(null);
		setHighlightedRow(null);
	}

	function renderCharacterFrame(data: CharacterGridDataType, column: "n" | "a" | "e" | "i" | "o" | "u") {
		return (
			<CharacterFrame
				highlighed={highlightCheck(column, data.rowLabel.default)}
				character={data?.[column]?.[pronunciation]?.[alphabet] ?? ""}
				subCharacter={
					data?.[column]?.[pronunciation]?.[alphabet] && data?.[column]?.[pronunciation]?.romanji
						? data?.[column]?.[pronunciation]?.romanji
						: ""
				}
				onMouseEnter={() => applyHighlight(column, data.rowLabel.default)}
				onMouseLeave={() => removeHighlight()}
			/>
		);
	}

	function renderRows() {
		return CharacterGridData.map((current, index) => (
			<tr className="character-grid__row" key={index}>
				<td>{renderCharacterFrame(current, "n")}</td>
				<td>{renderCharacterFrame(current, "a")}</td>
				<td>{renderCharacterFrame(current, "e")}</td>
				<td>{renderCharacterFrame(current, "i")}</td>
				<td>{renderCharacterFrame(current, "o")}</td>
				<td>{renderCharacterFrame(current, "u")}</td>
				<th
					className={!current.rowLabel?.[pronunciation] ? "faded" : ""}
					onMouseEnter={() => setHighlightedRow(current.rowLabel.default)}
					onMouseLeave={() => removeHighlight()}
				>
					{current.rowLabel?.[pronunciation] ?? current.rowLabel.default}
				</th>
			</tr>
		));
	}

	return (
		<table className="character-grid__table">
			<tr className="character-grid__row">
				<th onMouseEnter={() => setHighlightedColumn("n")} onMouseLeave={() => removeHighlight()}></th>
				<th onMouseEnter={() => setHighlightedColumn("a")} onMouseLeave={() => removeHighlight()}>
					A
				</th>
				<th onMouseEnter={() => setHighlightedColumn("e")} onMouseLeave={() => removeHighlight()}>
					E
				</th>
				<th onMouseEnter={() => setHighlightedColumn("i")} onMouseLeave={() => removeHighlight()}>
					I
				</th>
				<th onMouseEnter={() => setHighlightedColumn("o")} onMouseLeave={() => removeHighlight()}>
					O
				</th>
				<th onMouseEnter={() => setHighlightedColumn("u")} onMouseLeave={() => removeHighlight()}>
					U
				</th>
			</tr>
			{renderRows()}
		</table>
	);
}
