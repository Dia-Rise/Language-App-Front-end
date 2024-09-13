// import { Hira } from "../enums";
// import { convertGanaToRomanji } from "./convertGanaToRomanji";

export function convertGanaToCharacterEquivalent(hiragana: string, convertTo: "a" | "e" | "i" | "o" | "u") {
	const groups = [
		//Hira
		{ a: "あ", e: "え", i: "い", o: "お", u: "う" },
		{ a: "か", e: "け", i: "き", o: "こ", u: "く" },
		{ a: "さ", e: "せ", i: "し", o: "そ", u: "す" },
		{ a: "た", e: "て", i: "ち", o: "と", u: "つ" },
		{ a: "な", e: "ね", i: "に", o: "の", u: "ぬ", n: "ん" },
		{ a: "は", e: "へ", i: "ひ", o: "ほ", u: "ふ" },
		{ a: "ま", e: "め", i: "み", o: "も", u: "む" },
		{ a: "や", e: null, i: null, o: "よ", u: "ゆ" },
		{ a: "ら", e: "れ", i: "り", o: "ろ", u: "る" },
		{ a: "わ", e: null, i: null, o: "を", u: null },
		{ a: "が", e: "げ", i: "ぎ", o: "ご", u: "ぐ" },
		{ a: "ざ", e: "ぜ", i: "じ", o: "ぞ", u: "ず" },
		{ a: "だ", e: "で", i: "ぢ", o: "ど", u: "づ" },
		{ a: "ば", e: "べ", i: "び", o: "ぼ", u: "ぶ" },
		{ a: "ぱ", e: "ぺ", i: "ぴ", o: "ぽ", u: "ぷ" },
		//Kata
		{ a: "ア", e: "エ", i: "イ", o: "オ", u: "ウ" },
		{ a: "カ", e: "ケ", i: "キ", o: "コ", u: "ク" },
		{ a: "サ", e: "セ", i: "シ", o: "ソ", u: "ス" },
		{ a: "タ", e: "テ", i: "チ", o: "ト", u: "ツ" },
		{ a: "ナ", e: "ネ", i: "ニ", o: "ノ", u: "ヌ", n: "ン" },
		{ a: "ハ", e: "ヘ", i: "ヒ", o: "ホ", u: "フ" },
		{ a: "マ", e: "メ", i: "ミ", o: "モ", u: "ム" },
		{ a: "ヤ", e: null, i: null, o: "ヨ", u: "ユ" },
		{ a: "ラ", e: "レ", i: "リ", o: "ロ", u: "ル" },
		{ a: "ワ", e: "ヱ", i: "ヰ", o: "ヲ", u: null },
		{ a: "ガ", e: "ゲ", i: "ギ", o: "ゴ", u: "グ" },
		{ a: "ザ", e: "ゼ", i: "ジ", o: "ゾ", u: "ズ" },
		{ a: "ダ", e: "デ", i: "ヂ", o: "ド", u: "ヅ" },
		{ a: "バ", e: "ベ", i: "ビ", o: "ボ", u: "ブ" },
		{ a: "パ", e: "ペ", i: "ピ", o: "ポ", u: "プ" },
	];

	let newItem: string | null = null;

	groups.forEach((current) => {
		if (Object.values(current).includes(hiragana)) {
			newItem = current[convertTo];
		}
	});

	if (newItem) {
		return newItem;
	} else {
		throw Error(
			`convertHiraganaToCharacterEquivalent - '${hiragana}' does not have an equlivant of '${convertTo}'`
		);
	}
}
