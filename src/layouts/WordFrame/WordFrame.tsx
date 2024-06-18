import classnames from "classnames";
import { Button, ButtonAppearance, ButtonColors, ButtonVariant, Icon, IconSize, IconSVG } from "../../components";
import { WordType } from "../../types";
import { Pill, PillColors } from "../../components/Pill/Pill";

//? Maybe add this back in the future?
// export enum WordFrameColor {
// 	Orange = "word-frame--orange",
// 	Pink = "word-frame--pink",
// 	Blue = "word-frame--blue",
// 	Red = "word-frame--red",
// 	Yelllow = "word-frame--yellow",
// 	Green = "word-frame--green",
// }

export type WordFrameProps = {
	word: WordType;
	onInspect: () => void;
	className?: string;
};

export function WordFrame({ word, onInspect, className = "" }: WordFrameProps) {
	const baseClassName = `word-frame`;
	const classNames = classnames(baseClassName, className);

	function getPillsBasedOnType() {
		switch (word.type) {
			case "verb":
				return (
					<>
						<Pill label={"Verb"} color={PillColors.Success} />
						{word.verbType === "u" && <Pill label={"う Verb"} color={PillColors.Success} />}
						{word.verbType === "ru" && <Pill label={"る Verb"} color={PillColors.Success} />}
						{word.verbType === "irregular" && <Pill label={"Irregular Verb"} color={PillColors.Error} />}
					</>
				);
			case "adjective":
				return (
					<>
						<Pill label={"Adjective"} color={PillColors.Primary} />
						{word.adjectiveType === "i" && <Pill label={"い Adjective"} color={PillColors.Primary} />}
						{word.adjectiveType === "na" && <Pill label={"な Adjective"} color={PillColors.Primary} />}
					</>
				);
			case "noun":
				return <Pill label={"Noun"} color={PillColors.Light} />;
			case "thing":
				return <Pill label={"Thing"} color={PillColors.Info} />;
			case "phrase":
				return <Pill label={"Phrase"} color={PillColors.Secondary} />;
		}
	}

	return (
		<div className={classNames}>
			<div className={`${baseClassName}__content`}>
				<div className={`${baseClassName}__pill-container`}>{getPillsBasedOnType()}</div>
				<span className={`${baseClassName}__meaning`}>{word.meaning}</span>

				<div className={`${baseClassName}__sub-content`}>
					<div className={`${baseClassName}__examples`}>
						<span className={`${baseClassName}__furigana`}>{word.dictionary.furigana}</span>
						<span className={`${baseClassName}__romanji`}>{word.dictionary.romanji}</span>
					</div>

					{(word.type === "verb" || word.type === "adjective") && (
						<Button
							variant={ButtonVariant.Button}
							className={`${baseClassName}__button`}
							color={ButtonColors.Light}
							appearance={ButtonAppearance.Oultine}
							onClick={onInspect}
						>
							<Icon svg={IconSVG.Inspect} size={IconSize.MD} />
						</Button>
					)}
				</div>
			</div>
		</div>
	);
}
