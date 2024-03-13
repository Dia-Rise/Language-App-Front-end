export enum CharacterFrameSize {
	MD = "",
	SM = "character-frame--sm",
	XS = "character-frame--ex",
}

export type CharacterFrameProps = {
	character: string;
	size?: CharacterFrameSize;
	highlighed?: boolean;
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
};

export function CharacterFrame({
	character,
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
			<span className={`character-frame__character`}>{character}</span>
		</div>
	);
}
