describe('Aplicativo de análsie de sentimento', () => {
    it('deve retornar um sentimento positivo para texto positivo', () => {
      cy.visit('http://localhost:5000');
      cy.get('textarea').type('Eu amo esse filme!');
      cy.get('button').click();
      cy.get('.result').should('contain', 'Positivo');
    });
  });
  