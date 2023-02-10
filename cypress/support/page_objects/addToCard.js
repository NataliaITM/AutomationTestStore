export class AddToCard{

    addProductToCardByUsingSearchBox(product){
        cy.get('#filter_keyword').type(product)
        cy.get('[title="Go"]').click()
        //cy.get('#maincontainer').find('[class="fa fa-cart-plus fa-fw"]').first().click()
        cy.get('[class="productpagecart"]').click()
    }

addTshirtToCard(){
    cy.get('#maincontainer').find('[class="fa fa-cart-plus fa-fw"]').first().click()
    cy.get('[class="productpagecart"]').click()
}
addShoesToCard(){
    cy.get('#maincontainer').find('[class="fa fa-cart-plus fa-fw"]').eq(3).click()
    cy.get('[class="productpagecart"]').click()
}
}

export const addToCard = new AddToCard()