/// <reference types="cypress" />

beforeEach(() => {
  cy.server({
    onAnyRequest: (route, proxy) => {
      console.log("hit") //it doesn't look like this even gets hit..
      proxy.xhr.setRequestHeader("my-token", "lalalalal");
    }
  });
})
describe("page", () => {
  it("cy.server({onAnyRequest}) does not set headers on ", () => {
    cy.wait(1).then(() => {
      console.log("hit2")
      cy.request("https://example.cypress.io").then(() => {
        console.log("hit3")
      })
    })
  });
});
