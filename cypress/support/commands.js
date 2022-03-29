Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
})

//@VISIT WEBSITE
Cypress.Commands.add('navigateToSite', () => {
    cy.visit('/')
})

//@ADD TO CART
Cypress.Commands.add('addProductShowsCart', () => {  
    cy.get('.VAFCy > .Buttonstyle__ButtonWrapper-sc-1d6yy9q-0').contains('Add to Cart').click()
    cy.get(':nth-child(1) > .ProductCardstyle__ProductCardWrapper-sc-5v39a6-0 > .ProductCardstyle__ProductImageWrapper-sc-5v39a6-1')
      .invoke('show').contains('Add to Cart').click({force: true})
})

//@CLEAR BUTTON 
Cypress.Commands.add('clearRemovesCartItems', () => {  
    cy.addProductShowsCart()
    cy.get('.ShoppingCartstyle__ButtonContainer-sc-1xombtx-1 > .Buttonstyle__ButtonWrapper-sc-1d6yy9q-0').contains('Clear').click()
 
 })

 //@FILTER PRODUCTS BY CATEGORY
Cypress.Commands.add('filterProductByCategory', () => { 
    const categories = ['nature','food','technology', 'luxury', 'art']
    categories.map(category=>{
            cy.get(`input[label=${category}]`).click();
            cy.get('#__next > div > main > div > div > div:nth-child(5) > div > div.style__Column-sc-4ctdae-1.eAPRKs > div > div.style__Column-sc-4ctdae-1.RTgwF > div > div:nth-child(1) > div > div.ProductCardstyle__ProductData-sc-5v39a6-2.dRSqni > p.ProductCardstyle__Category-sc-5v39a6-3.juBEtJ' ).contains( category.charAt(0).toUpperCase() + category.slice(1));
            cy.get(`input[label=${category}]`).click();
    })
})            

