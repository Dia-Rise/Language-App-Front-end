import { Pill, PillColors } from "../../components/Pill/Pill";
import { WordType } from "../../types";

export type WordModalPillsProps = {
	word: WordType;
};

export function WordModalPills({ word }: WordModalPillsProps) {
	const baseClassName = "word-modal";

	return (
		<div className={`${baseClassName}__pill-container`}>
			{word.type === "verb" && (
				<>
					<Pill label={"Verb"} color={PillColors.Success} />
					{word.verbType === "u" && <Pill label={"う Verb"} color={PillColors.Success} />}
					{word.verbType === "ru" && <Pill label={"る Verb"} color={PillColors.Success} />}
					{word.verbType === "irregular" && <Pill label={"Irregular Verb"} color={PillColors.Error} />}
				</>
			)}

			{word.type === "adjective" && (
				<>
					<Pill label={"Adjective"} color={PillColors.Primary} />
					{word.adjectiveType === "i" && <Pill label={"い Adjective"} color={PillColors.Primary} />}
					{word.adjectiveType === "na" && <Pill label={"な Adjective"} color={PillColors.Primary} />}
				</>
			)}
		</div>
	);
}
