import { WordType } from "../../types";
import { WordModalPills } from "./WordModalPills";

export type WordModalHeaderProps = {
	word: WordType;
};

export function WordModalHeader({ word }: WordModalHeaderProps) {
	const baseClassName = "word-modal";

	return (
		<div>
			<WordModalPills {...{ word }} />
			<div className={`${baseClassName}__header`}>
				<span className={`${baseClassName}__meaning`}>{word.meaning}</span>
				<div className={`${baseClassName}__sub-header`}>
					<span className={`${baseClassName}__gana`}>{word.dictionary.gana}</span>
					<span className={`${baseClassName}__romanji`}>({word.dictionary.romanji})</span>
				</div>
			</div>
		</div>
	);
}
