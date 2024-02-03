//yarn run cypress open
describe('My first test', () => {
  it('Check project filters works', () => {
    cy.visit('http://localhost:3000/projects');

    cy.url().should('include', '/projects');

    cy.contains('Docker').click();

    cy.get('a[href="/projects/89"]').first().as('project');
    cy.get('@project').click();

    cy.get('@project').then(project => {
      const projectUrl = project.attr('href');

      cy.get('@project').click();

      cy.url().should('include', projectUrl);
    });
  });
});
