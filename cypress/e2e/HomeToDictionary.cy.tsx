describe("To start from the home screen and search for 'to speak' in the dictionary.", () => {
	it("test", () => {
		cy.visit("http://localhost:5173/");
		cy.get('[href="/dictionary"]').click();
		cy.get("#searchInput").type("to speak");
	});
});
