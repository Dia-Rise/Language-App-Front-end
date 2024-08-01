import { useEffect, useRef, useState } from "react";
import { WordType } from "../../types";
import { FormInput, Spinner } from "../../components";
import { getWordByString } from "../../resources";
import { SiteHeader, WordFrame, WordModal } from "../../layouts";
import { DictionaryScreenDisclaimer } from "./DictionaryScreenDisclaimer";

export function DictionaryScreen() {
	const [searchValue, setSearchValue] = useState<string>("");
	const [searchResults, setSearchResults] = useState<WordType[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const [selectedWord, setSelectedWord] = useState<WordType | null>(null);

	const typingTimer = useRef<ReturnType<typeof setTimeout>>();

	function fetchResults() {
		if (!searchValue) return;

		try {
			const results = getWordByString(searchValue); //await goes here
			if (results) setSearchResults(results);

			setIsLoading(false);
		} catch (error) {
			throw new Error();
		}
	}

	useEffect(() => {
		clearTimeout(typingTimer.current);
		if (searchValue) {
			//Wait untill the user has finished typing before sending request.
			typingTimer.current = setTimeout(fetchResults, 500);
			setIsLoading(true);
		} else {
			setSearchResults([]);
			setIsLoading(false);
		}

		return () => {
			clearTimeout(typingTimer.current);
		};
	}, [searchValue]);

	const baseClassName = "dictionary-screen";

	return (
		<div className={`${baseClassName}`}>
			<SiteHeader label={"Dictionary"} />

			<div className={`${baseClassName}__top-bar`}>
				<h1 className={`${baseClassName}__header`}>Dictionary</h1>
				<FormInput
					id={""}
					className={`${baseClassName}__search-input`}
					label={"search for a word here"}
					value={searchValue}
					autoFocus
					onChange={(newValue: string) => {
						setSearchValue(newValue);
					}}
				/>
			</div>

			<div className={`${baseClassName}__results-grid`}>
				{!isLoading ? (
					searchResults.length ? (
						searchResults.map((current, index) => (
							<WordFrame key={index} word={current} onInspect={() => setSelectedWord(current)} />
						))
					) : (
						<p>{searchValue ? "No results found." : "Search for words in the input field above."}</p>
					)
				) : (
					<Spinner />
				)}
			</div>

			{selectedWord && (
				<WordModal
					isOpen={true}
					onClose={() => {
						setSelectedWord(null);
					}}
					word={selectedWord}
				/>
			)}

			<DictionaryScreenDisclaimer />
		</div>
	);
}
