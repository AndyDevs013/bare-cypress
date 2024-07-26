const { before } = require("mocha")

describe('template spec', () => {
  beforeEach(() => {
    // Visit the login page
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
  });  

  it('Verify Radio button', () => {
    cy.get('[for="radio1"] > .radioButton').click()
    cy.get('[for="radio1"] > .radioButton').should('be.checked')
    cy.get('[for="radio2"] > .radioButton').should('not.be.checked')
    cy.get('[for="radio3"] > .radioButton').should('not.be.checked')
  })

  it('Verifying suggestion', () => {
    cy.get('#autocomplete').click().type("South")
    cy.contains("South Africa").click()
    cy.get('#autocomplete')
    .clear()
    .type("Republic")
    .wait(2000)
    cy.get("#ui-id-1").click({force:true})
  })
})