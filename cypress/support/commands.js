Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
})

//@VISIT WEBSITE
Cypress.Commands.add('navigateToSite', () => {
    cy.visit('/')
})

//@FEATURED PRODUCT
Cypress.Commands.add('featureProductExist', () => {  
    cy.get('.FeaturedProductstyle__ProductImageWrapper-b7938p-0 > p').contains('Photo of the day')
})

//@ADD TO CART
Cypress.Commands.add('addProductShowsCart', () => {  
    cy.get('.VAFCy > .Buttonstyle__ButtonWrapper-sc-1d6yy9q-0').contains('Add to Cart').click()
    cy.get(':nth-child(1) > .ProductCardstyle__ProductImageWrapper-sc-5v39a6-1')
      .invoke('show').contains('Add to Cart').click({force: true})
})

//@CLEAR BUTTON 
Cypress.Commands.add('clickClearRemovesCartItems', () => {  
    cy.get('.Buttonstyle__ButtonWrapper-sc-1d6yy9q-0').contains('Clear').click()
 
 })




