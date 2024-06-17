import { Verbs } from "../../classes/verbs";
import { Tabs } from "../../components";
import { Pill, PillColors } from "../../components/Pill/Pill";
import { conjugationGroupType } from "../../types";

export type WordModalVerbProps = {
	word: Verbs;
};

export function WordModalVerb({ word }: WordModalVerbProps) {
	const baseClassName = "word-modal";

	function renderConjugationBlocks(conjugation: conjugationGroupType) {
		function formatPillText(text: string) {
			return (
				text.charAt(0).toUpperCase() +
				text
					.slice(1)
					.replace(/([A-Z])/g, " $1")
					.trim()
			);
		}

		return Object.keys(conjugation).map((key, index) => (
			<div className={`${baseClassName}__conjugation-block`} key={index}>
				<div className={`${baseClassName}__pill-container`}>
					<Pill label={formatPillText(key)} color={PillColors.Light} />
					{conjugation[key as keyof conjugationGroupType].convertion === "exception" && (
						<Pill label={"Exception"} color={PillColors.Error} />
					)}
				</div>
				<div className={`${baseClassName}__sub-header`}>
					<span className={`${baseClassName}__furigana`}>
						{conjugation[key as keyof conjugationGroupType].furigana}
					</span>
					<span className={`${baseClassName}__romanji`}>
						({conjugation[key as keyof conjugationGroupType].romanji})
					</span>
				</div>
			</div>
		));
	}

	return (
		<div>
			<span>Conjugation</span>

			<Tabs
				data={[
					{
						id: "1",
						label: "Masu Form",
						content: (
							<div className={`${baseClassName}__conjugation-wrapper`}>
								{renderConjugationBlocks(word.masuForm)}
							</div>
						),
					},
					{
						id: "2",
						label: "Te Form",
						content: (
							<div className={`${baseClassName}__conjugation-wrapper`}>
								<div className={`${baseClassName}__conjugation-block`}>
									<div className={`${baseClassName}__pill-container`}>
										{word.teForm.convertion ? (
											word.teForm.convertion === "exception" ? (
												<Pill label={"Exception"} color={PillColors.Error} />
											) : (
												<Pill label={word.teForm.convertion} color={PillColors.Info} />
											)
										) : (
											<></>
										)}
									</div>
									<div className={`${baseClassName}__sub-header`}>
										<span className={`${baseClassName}__furigana`}>{word.teForm.furigana}</span>
										<span className={`${baseClassName}__romanji`}>({word.teForm.romanji})</span>
									</div>
								</div>
							</div>
						),
					},
					{
						id: "3",
						label: "Short Form",
						content: (
							<div className={`${baseClassName}__conjugation-wrapper`}>
								{renderConjugationBlocks(word.shortForm)}
							</div>
						),
					},
				]}
			/>
		</div>
	);
}
