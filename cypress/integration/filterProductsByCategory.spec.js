Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
})

before(() => {
    cy.navigateToSite()
  })

describe('Filter Products By Category', () => {   

    it('Validate Products can be Filtered by Category', () => {
        const categories = ['nature','food','technology', 'luxury', 'art']

        categories.map(category=>{
            cy.get(`input[label=${category}]`).click();
            cy.get('#__next > div > main > div > div > div:nth-child(5) > div > div.style__Column-sc-4ctdae-1.eAPRKs > div > div.style__Column-sc-4ctdae-1.RTgwF > div > div:nth-child(1) > div > div.ProductCardstyle__ProductData-sc-5v39a6-2.dRSqni > p.ProductCardstyle__Category-sc-5v39a6-3.juBEtJ' ).contains( category.charAt(0).toUpperCase() + category.slice(1));
            cy.get(`input[label=${category}]`).click();

        })
    })
 
})    