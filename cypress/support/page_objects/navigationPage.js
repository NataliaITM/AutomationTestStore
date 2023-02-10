export class NavigationPage{
    TshirtPage(){
        cy.get('#categorymenu').contains('Apparel & accessories').click()
        cy.get('[class="thumbnails row"]').contains('T-shirts').click()
    }
    ShoesPage(){
        cy.get('#categorymenu').contains('Apparel & accessories').click()
        cy.get('[class="thumbnails row"]').contains('Shoes').click()
    }
}

export const navigateTo = new NavigationPage()