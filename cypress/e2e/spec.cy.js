const { before } = require("mocha")

describe('template spec', () => {
  beforeEach(() => {
    // Visit the login page
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
  });  

  it('Radio Buttons', () => {
    // Clicking on Radio Button
    cy.get('[for="radio1"] > .radioButton').click()
    // Verifying checked buttons
    cy.get('[for="radio1"] > .radioButton').should('be.checked')
    cy.get('[for="radio2"] > .radioButton').should('not.be.checked')
    cy.get('[for="radio3"] > .radioButton').should('not.be.checked')
  })

  it('Suggestions', () => {
    // Testing Auto Complete 
    cy.get('#autocomplete').click().type("South")
    cy.contains("South Africa").click()
    cy.get('#autocomplete')
    .clear()
    // Testing Dropdown menu
    .type("Republic")
    .wait(2000)
    cy.get("#ui-id-1").click({force:true})
    // Need to come back to this 
  })

  it('Checkboxes', () => {
    // Check all boxes and validate 

    // Uncheck first box and validate 

  })
  it('Show/hide', () => {

  })
  it('Web Table Fixed Header ', () => {

  })
  it('iFrame', () => {

  })
})