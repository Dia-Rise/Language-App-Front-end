import { Hira, Kata } from "../enums";

export function convertGanaToRomanji(gana: string) {
	const hiraValue = (Object.keys(Hira) as Array<keyof typeof Hira>).find((key) => Hira[key] === gana);
	if (hiraValue) return hiraValue.toLowerCase();

	const kataValue = (Object.keys(Kata) as Array<keyof typeof Kata>).find((key) => Kata[key] === gana);
	if (kataValue) return kataValue.toLowerCase();

	throw new Error(
		`convertGanaToRomanji: Value given does not exist within either Hiragana or Katakana. You may have given a special character: ${gana}`
	);
}
