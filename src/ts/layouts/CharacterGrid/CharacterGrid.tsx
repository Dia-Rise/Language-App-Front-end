import { useState } from "react";
import { CharacterFrame } from "../../components";
import { Hira } from "../../enums";
import { CharacterGridData } from "./CharcterGrid.data";

export type CharacterGridProps = {};

export function CharacterGrid({}: CharacterGridProps) {
	const [mode, setMode] = useState<"hiragana" | "katakana">("hiragana");
	const [sound, setSound] = useState<"default" | "dakuten" | "handakuten">("default");

	function renderRows() {
		return CharacterGridData.map((current, index) => (
			<tr className="row">
				<td>
					<CharacterFrame character={current.n?.[sound]?.[mode] ?? ""} />
				</td>
				<td>
					<CharacterFrame highlighed character={current.a?.[sound]?.[mode] ?? ""} />
				</td>
				<td>
					<CharacterFrame character={current.e?.[sound]?.[mode] ?? ""} />
				</td>
				<td>
					<CharacterFrame character={current.i?.[sound]?.[mode] ?? ""} />
				</td>
				<td>
					<CharacterFrame character={current.o?.[sound]?.[mode] ?? ""} />
				</td>
				<td>
					<CharacterFrame character={current.u?.[sound]?.[mode] ?? ""} />
				</td>
				<th></th>
			</tr>
		));
	}

	return (
		<div>
			<table>
				<tr>
					<th>n</th>
					<th>a</th>
					<th>e</th>
					<th>i</th>
					<th>o</th>
					<th>u</th>
				</tr>
				{renderRows()}
			</table>
		</div>
	);
}
