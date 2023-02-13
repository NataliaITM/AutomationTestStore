export class AddToCard{

    addProductToCardByUsingSearchBox(product){
        cy.get('#filter_keyword').type(product)
        cy.get('[title="Go"]').click()
        cy.get('#maincontainer').then(($maincontainer) => {
            //jeśli do wyszunakej frazy jest więcej niż jeden obiekt
            if ($maincontainer.find('#search_button').length) {
                cy.get('#maincontainer').find('[class="fa fa-cart-plus fa-fw"]').first().click()
            }
        })
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
cartCheckOutGuestCheckoutOption(){
    cy.get('#cart_checkout1').click()
    cy.get('#accountFrm').then(chceckoutOptions => {
      cy.wrap(chceckoutOptions).find('#accountFrm_accountguest').click()
      cy.wrap(chceckoutOptions).find('button').click()
     })
}
}

export const addToCard = new AddToCard()