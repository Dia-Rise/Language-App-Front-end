import { Adjectives } from "../../classes";
import { Tabs } from "../../components";

export type WordModalVerbProps = {
	word: Adjectives;
};

export function WordModalAdjectives({ word }: WordModalVerbProps) {
	const baseClassName = `word-frame`;

	return (
		<div>
			<span className={`${baseClassName}__meaning`}>{word.meaning}</span>

			<div className={`${baseClassName}__sub-content`}>
				<div className={`${baseClassName}__examples`}>
					<span className={`${baseClassName}__furigana`}>{word.dictionaryForm.furigana}</span>
					<span className={`${baseClassName}__romanji`}>{word.dictionaryForm.romanji}</span>
				</div>
			</div>

			<Tabs
				data={[
					{
						id: "1",
						label: "Standard",
						content: (
							<>
								<p>{word.tense.pastAffirmative.romanji}</p>
								<p>{word.tense.pastAffirmative.furigana}</p>
							</>
						),
					},
					{
						id: "2",
						label: "Te Form",
						content: (
							<>
								<p>{word.teForm.romanji}</p>
								<p>{word.teForm.furigana}</p>
							</>
						),
					},
					{
						id: "3",
						label: "Short Form",
						content: (
							<>
								<p>{word.shortForm.pastAffirmative.romanji}</p>
								<p>{word.shortForm.pastAffirmative.furigana}</p>
							</>
						),
					},
				]}
			/>
		</div>
	);
}
