import { Hira, Kata } from "../enums";

export function convertFuriganaToRomanji(furigana: string) {
	const hiraValue = (Object.keys(Hira) as Array<keyof typeof Hira>).find((key) => Hira[key] === furigana);
	if (hiraValue) return hiraValue.toLowerCase();

	const kataValue = (Object.keys(Kata) as Array<keyof typeof Kata>).find((key) => Kata[key] === furigana);
	if (kataValue) return kataValue.toLowerCase();

	throw new Error(
		`convertFuriganaToRomanji: Value given does not exist within either Hiragana or Katakana. You may have given a special character: ${furigana}`
	);
}
