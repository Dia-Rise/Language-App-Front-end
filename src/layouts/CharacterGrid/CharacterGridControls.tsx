import { Switch, ActionGroup, Action, ActionVariant, ActionSize } from "../../components";
import { IconSVG } from "../../components/Icon/Icon";
import { Alphabet, Pronunciation, Hira } from "../../enums";

export type CharacterGridControlsProps = {
	alphabet: Alphabet;
	toggleAlphabet: () => void;
	pronunciation: Pronunciation;
	changePronunciation: (value: Pronunciation) => void;
};

export function CharacterGridControls({
	alphabet,
	toggleAlphabet,
	pronunciation,
	changePronunciation,
}: CharacterGridControlsProps) {
	return (
		<div className="character-grid__controls">
			<Switch
				value={alphabet === Alphabet.Katagana ? true : false}
				onClick={() => toggleAlphabet()}
				falseIcon={IconSVG.Hiragana}
				trueIcon={IconSVG.Katakana}
			/>

			<ActionGroup>
				<Action
					variant={ActionVariant.Toggle}
					onClick={() => changePronunciation(Pronunciation.Default)}
					active={pronunciation === Pronunciation.Default}
					size={ActionSize.SM}
				>
					{Hira.HA}
				</Action>
				<Action
					variant={ActionVariant.Toggle}
					onClick={() => changePronunciation(Pronunciation.Dakuten)}
					active={pronunciation === Pronunciation.Dakuten}
					size={ActionSize.SM}
				>
					{Hira.BA}
				</Action>
				<Action
					variant={ActionVariant.Toggle}
					onClick={() => changePronunciation(Pronunciation.Handakuten)}
					active={pronunciation === Pronunciation.Handakuten}
					size={ActionSize.SM}
				>
					{Hira.PA}
				</Action>
			</ActionGroup>
		</div>
	);
}
