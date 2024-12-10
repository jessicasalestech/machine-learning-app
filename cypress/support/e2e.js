
Cypress.Commands.add('analyzeSentiment', (text, expectedSentiment) => {
    cy.visit('/')
    cy.get('textarea').type(text)
    cy.get('button').click()
    cy.get('.result').should('contain', expectedSentiment)
  })
  
  
  beforeEach(() => {
  
    cy.clearCookies()
  })
  

  afterEach(() => {

    cy.clearLocalStorage()
  })
  