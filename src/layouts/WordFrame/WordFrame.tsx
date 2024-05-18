import classnames from "classnames";
import { Button, ButtonColors, ButtonVariant, Icon, IconSize, IconSVG } from "../../components";
import { WordType } from "../../types";

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
	illistration: string;
	word: WordType;
	className?: string;
};

export function WordFrame({ word, className = "" }: WordFrameProps) {
	const baseClassName = `word-frame`;
	const classNames = classnames(baseClassName, className);

	return (
		<div className={classNames}>
			<div className={`${baseClassName}__illistration`}>{/* ADD ILLISTRATION HERE */}</div>
			<div className={`${baseClassName}__content`}>
				<span className={`${baseClassName}__meaning`}>{word.meaning}</span>

				<div className={`${baseClassName}__sub-content`}>
					<div className={`${baseClassName}__examples`}>
						<span className={`${baseClassName}__furigana`}>{word.dictionary.furigana}</span>
						<span className={`${baseClassName}__romanji`}>{word.dictionary.romanji}</span>
					</div>

					<Button
						variant={ButtonVariant.Button}
						className={`${baseClassName}__button`}
						color={ButtonColors.White}
						onClick={() => {}}
					>
						<Icon svg={IconSVG.Inspect} size={IconSize.MD} />
					</Button>
				</div>
			</div>
		</div>
	);
}
