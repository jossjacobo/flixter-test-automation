/// <reference types="cypress" />

describe('Flixter', () => {
  describe('Search', () =>{
    it('allows for searching valid movies', () => {
      const movie = "Lord of the Rings";
      cy.visit('https://www.flixster.com/');
      
      // Click on search and type out search query
      cy.get('[data-qa="search-input"]')
        .click()
        .type("Lord of the rings");
      
      // Validate the movie was found
      cy.get('[data-qa="SearchMovieTile"]')
        .get('a span')
        .contains(movie);
    });
  });
});