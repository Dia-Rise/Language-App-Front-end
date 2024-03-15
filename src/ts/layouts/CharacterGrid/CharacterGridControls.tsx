import { Action, ActionGroup, ActionSize, Switch } from "../../components";
import { Alphabet, Hira, Pronunciation } from "../../enums";
import { IconSVG } from "../../components/Icon";

export type CharacterGridControlsProps = {
	alphabet: Alphabet;
	toggleAlphabet: () => void;
	changePronunciation: (value: Pronunciation) => void;
};

export function CharacterGridControls({ alphabet, toggleAlphabet, changePronunciation }: CharacterGridControlsProps) {
	return (
		<div className="character-grid__controls">
			<Switch
				value={alphabet === Alphabet.Katagana ? true : false}
				onClick={() => toggleAlphabet()}
				falseIcon={IconSVG.Hiragana}
				trueIcon={IconSVG.Katakana}
			/>

			<ActionGroup>
				<Action onClick={() => changePronunciation(Pronunciation.Default)} size={ActionSize.SM}>
					{Hira.HA}
				</Action>
				<Action onClick={() => changePronunciation(Pronunciation.Dakuten)} size={ActionSize.SM}>
					{Hira.BA}
				</Action>
				<Action onClick={() => changePronunciation(Pronunciation.Handakuten)} size={ActionSize.SM}>
					{Hira.PA}
				</Action>
			</ActionGroup>
		</div>
	);
}
