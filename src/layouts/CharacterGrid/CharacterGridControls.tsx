import { Switch, ButtonGroup, Button, ButtonSize, ButtonAppearance, ButtonVariant } from "../../components";
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

			<ButtonGroup>
				<Button
					variant={ButtonVariant.Button}
					appearance={ButtonAppearance.Oultine}
					onClick={() => changePronunciation(Pronunciation.Default)}
					active={pronunciation === Pronunciation.Default}
					size={ButtonSize.SM}
				>
					{Hira.HA}
				</Button>
				<Button
					variant={ButtonVariant.Button}
					appearance={ButtonAppearance.Oultine}
					onClick={() => changePronunciation(Pronunciation.Dakuten)}
					active={pronunciation === Pronunciation.Dakuten}
					size={ButtonSize.SM}
				>
					{Hira.BA}
				</Button>
				<Button
					variant={ButtonVariant.Button}
					appearance={ButtonAppearance.Oultine}
					onClick={() => changePronunciation(Pronunciation.Handakuten)}
					active={pronunciation === Pronunciation.Handakuten}
					size={ButtonSize.SM}
				>
					{Hira.PA}
				</Button>
			</ButtonGroup>
		</div>
	);
}
