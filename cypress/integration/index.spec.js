import "gatsby-cypress/commands"

context("Homepage", () => {
  beforeEach(() => {
    cy.visit(`http://localhost:8000`)
    cy.waitForRouteChange()
  })
