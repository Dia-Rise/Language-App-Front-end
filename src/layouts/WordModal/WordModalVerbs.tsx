import { Verbs } from "../../classes/verbs";
import { Tabs } from "../../components";

export type WordModalVerbProps = {
	word: Verbs;
};

export function WordModalVerb({ word }: WordModalVerbProps) {
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
						label: "Masu Form",
						content: (
							<>
								<p>{word.masuForm.PastAffirmative.romanji}</p>
								<p>{word.masuForm.PastAffirmative.furigana}</p>
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
						label: "short Form",
						content: (
							<>
								<p>{word.shortForm.negative.romanji}</p>
								<p>{word.shortForm.negative.furigana}</p>
							</>
						),
					},
				]}
			/>
		</div>
	);
}
