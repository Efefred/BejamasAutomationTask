Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
})

before(() => {
    cy.navigateToSite()
  })

describe('Clear Button Clears Items on Cart', () => { 

 it('Validate that Cart Items are Cleared and Cart Hidden If the Clear Button is Clicked', () => {
    cy.clearRemovesCartItems()
  }) 

})