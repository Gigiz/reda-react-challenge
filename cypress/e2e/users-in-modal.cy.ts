/// <reference types="cypress" />

describe("happy path", () => {
  it("should show users modal and persist state when modal will be close", () => {
    cy.intercept({
      url: '/api/users/random_user*',
    }).as('randomUsers')

    cy.visit("/")
    cy.contains("Random Users").should("exist").click()
    cy.wait('@randomUsers')
    cy.get("[id='react-portal-user-modal-root']").should("exist")
    cy.get("[data-testid='user-toggle-bar']").should("have.length", 10)

    cy.get("[id='users-number']").clear().type("12")
    cy.get("[id='react-portal-user-modal-root']").contains('button', 'Refetch').click()
    cy.wait('@randomUsers')
    cy.get("[data-testid='user-toggle-bar']").should("have.length", 12)

    cy.get("[data-testid='close-modal']").click()
    cy.get("[id='react-portal-user-modal-root']").should("not.exist")

    cy.contains("Random Users").should("exist").click()
    cy.get("[id='react-portal-user-modal-root']").should("exist")
    cy.get('@randomUsers.all').should('have.length', 2)
    cy.get("[data-testid='user-toggle-bar']").should("have.length", 12)
  })
  it("should show an error when trying to fetch more than 20 users", () => {
    cy.visit("/")
    cy.contains("Random Users").should("exist").click()

    cy.get("[id='users-number']").clear().type("22")
    cy.get("[id='react-portal-user-modal-root']").contains('button', 'Refetch').click()
    
    cy.get("[data-testid='user-toggle-bar']").should("have.length", 0)
    cy.contains('too many users requested')
  })
})
