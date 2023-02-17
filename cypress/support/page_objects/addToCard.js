export class AddToCard {
    searchBox = '#filter_keyword[placeholder="Search Keywords"]'
    searchButton = '[title="Go"][class="button-in-search"]'
    addToCartButton = '[class="productpagecart"]'

    addProductToCardByUsingSearchBox(product) {
        cy.get(addToCard.searchBox).type(product)
        cy.get(addToCard.searchButton).click()
        cy.get('#maincontainer').then(($maincontainer) => {
            //jeśli do wyszunakej frazy jest więcej niż jeden produkt
            if ($maincontainer.find('[class="sorting well"]').length) {
                cy.get('#maincontainer').find('[class="fa fa-cart-plus fa-fw"]').first().click()
            }
        })
        cy.get(addToCard.addToCartButton).click()
    }

    addTshirtToCard() {
        cy.get('#maincontainer').find('[class="fa fa-cart-plus fa-fw"]').first().click()
        cy.get(addToCard.addToCartButton).click()
    }
    addShoesToCard() {
        cy.get('#maincontainer').find('[class="fa fa-cart-plus fa-fw"]').eq(3).click()
        cy.get(addToCard.addToCartButton).click()
    }
    cartCheckOutGuestCheckoutOption() {
        cy.get('#cart_checkout1').click()
        cy.get('#accountFrm').then(chceckoutOptions => {
            cy.wrap(chceckoutOptions).find('#accountFrm_accountguest').click()
            cy.wrap(chceckoutOptions).find('button').click()
        })
    }
}

export const addToCard = new AddToCard()