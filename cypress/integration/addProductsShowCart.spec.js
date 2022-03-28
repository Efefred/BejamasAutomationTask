Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
})

before(() => {
    cy.navigateToSite()
  })

describe('Add Products to Cart Shows Cart Drop-Down ', () => { 

    it('Validate that Cart Drop-down Shows If Products Are Added to Cart', () => {
         cy.addProductShowsCart()
    })

})
