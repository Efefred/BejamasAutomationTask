Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
})

before(() => {
    cy.navigateToSite()
  })

describe('Filter Products By Category', () => {   

    it('Validate that Products can be Filtered by Category', () => {
        cy.filterProductByCategory()
    })
 
})    