export class insideCard {
    topCardTotalQuantity = '.container-fluid .block_7 [class="label label-orange font14"]'
    topCardTotalPrice = '.container-fluid .block_7 .cart_total'
    allProductsInCard = '[class="container-fluid cart-info product-list"] tbody tr'

    topCardIsEmpty() {
        cy.get(inCard.topCardTotalQuantity).should('contain', '0')
        cy.get(inCard.topCardTotalPrice).should('contain', '$0.00')
    }
    topCardIsNotEmpty() {
        cy.get(inCard.topCardTotalQuantity).should('not.contain', '0')
        cy.get(inCard.topCardTotalPrice).should('not.contain', '$0.00')
    }
    priceInCardMatchPriceInTopCard() {
        cy.get('#totals_table').find('tbody tr').eq(0).find('td').eq(1).invoke('prop', 'textContent').then(price => {
            cy.get(inCard.topCardTotalPrice).should('contain', price)
        })
    }
    quantityOfAllProductsInCardMatchQuantityInTopCard() {
        var counter = 0
        cy.get(inCard.allProductsInCard).each((row, index) => {
            if (index >= 1) {
                cy.wrap(row).find('td').eq(4).find('[type="text"]').invoke('prop', 'value').then(x => {
                    counter = counter + parseInt(x)
                    cy.wrap(counter).as('counter')
                })
            }
        })
        cy.get('@counter').then(allProductsQuantity =>
            cy.get(inCard.topCardTotalQuantity).should('contain', allProductsQuantity))
    }
}
export const inCard = new insideCard()