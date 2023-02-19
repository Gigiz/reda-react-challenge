/// <reference types="cypress" />

describe("happy path", () => {
  it("should show users modal", () => {
    cy.visit("/")
    cy.contains("Random Users").should("exist").click()
    cy.get("[id='react-portal-user-modal-root']").should("exist")
  })
})
