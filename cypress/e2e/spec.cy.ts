describe('My first test', () => {
  it('Visits the kitchen sink page', () => {
    cy.visit('https://example.cypress.io');
  });

  it('after redirct to type page, input should show text after user write it into', () => {
    cy.visit('https://example.cypress.io');

    cy.contains('type').click();

    cy.url().should('include', 'commands/actions');

    cy.get('.action-email').type('fake@email.com')

    cy.get('.action-email').should('have.value', 'fake@email.com')
  });
});
