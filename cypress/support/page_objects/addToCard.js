export class AddToCard {
    searchBox = '#filter_keyword[placeholder="Search Keywords"]'
    searchButton = '[title="Go"][class="button-in-search"]'
    addToCartButton = '#product_details .cart'
    cardIcon = '#maincontainer [class="fa fa-cart-plus fa-fw"]'
    checkoutButton = '#cart_checkout1'
    guestCheckoutRadioButton = '#accountFrm_accountguest'
    continueButton = '#accountFrm button'
    allProductsOnPage = '#maincontainer [class="col-md-3 col-sm-6 col-xs-12"]'

    addProductToCardByUsingSearchBox(product) {
        cy.get(addToCard.searchBox).type(product)
        cy.get(addToCard.searchButton).click()
        cy.get('#maincontainer').then(($maincontainer) => {
            //jeśli do wyszunakej frazy jest więcej niż jeden produkt
            if ($maincontainer.find('[class="sorting well"]').length) {
                cy.get(addToCard.cardIcon).first().click()
            }
        })
        cy.get(addToCard.addToCartButton).click()
    }
    addTshirtToCard(productname) {
        cy.get(addToCard.allProductsOnPage).find('[title="'+productname+'"]').click()
        cy.get(addToCard.addToCartButton).click()
    }
    addShoesToCard(productname) {
        cy.get(addToCard.allProductsOnPage).find('[title="'+productname+'"]').click()
        if (productname === 'New Ladies High Wedge Heel Toe Thong Diamante Flip Flop Sandals'){
            cy.get('#option344747').click()
            cy.get(addToCard.addToCartButton).click() 
        } else {
          cy.get(addToCard.addToCartButton).click()  
        }
    }
    cartCheckOutGuestCheckoutOption() {
        cy.get(addToCard.checkoutButton).click()
        cy.get(addToCard.guestCheckoutRadioButton).click()
        cy.get(addToCard.continueButton).click()
    }
}

export const addToCard = new AddToCard()