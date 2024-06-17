type WordTypeCommonTypes = {
	id: string;
	meaning: string;
	dictionary: {
		// kanji: string;
		furigana: string;
		romanji: string;
		example?: string;
	};
	tabs?: string[];
};

type WordTypeTypes =
	| {
			type: "verb";
			verbType: "ru" | "u" | "irregular";
	  }
	| {
			type: "adjective";
			adjectiveType: "i" | "na";
	  }
	| {
			type: "noun";
			// nounType: string;
	  }
	| {
			type: "thing";
			thingType: string;
	  };

export type WordType = WordTypeCommonTypes & WordTypeTypes;
