export enum CharacterFrameSize {
	MD = "",
	SM = "character-frame--sm",
	XS = "character-frame--ex",
}

export type CharacterFrameProps = {
	character: string;
	subCharacter?: string;
	size?: CharacterFrameSize;
	highlighed?: boolean;
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
};

export function CharacterFrame({
	character,
	subCharacter,
	size = CharacterFrameSize.MD,
	highlighed = false,
	onMouseEnter,
	onMouseLeave,
}: CharacterFrameProps) {
	return (
		<div
			className={`character-frame ${size} ${highlighed ? "character-frame--highlight" : ""} ${!character.length ? "character-frame--faded" : ""}`}
			{...{ onMouseEnter, onMouseLeave }}
		>
			<div className={`character-frame__characters`}>
				<span className={`character-frame__character`}>{character}</span>
				{subCharacter && <span className={`character-frame__sub-character`}>{subCharacter}</span>}
			</div>
		</div>
	);
}
