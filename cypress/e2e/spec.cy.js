/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit("https://example.cypress.io");
    const longString = "a".repeat(1000000);
    throw new Error(longString);
  })
})
