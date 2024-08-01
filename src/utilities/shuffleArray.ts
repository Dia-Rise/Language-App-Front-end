export function shuffleArray<T>(givenArray: T[]): T[] {
	let currentIndex = givenArray.length;

	while (currentIndex !== 0) {
		let randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		[givenArray[currentIndex], givenArray[randomIndex]] = [givenArray[randomIndex], givenArray[currentIndex]];
	}

	return givenArray;
}
