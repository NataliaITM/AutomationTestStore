export class insideCard {
    topCardTotalQuantity = '[class="label label-orange font14"]'
    topCardTotalPrice = '.cart_total'

topCardIsEmpty(){
    cy.get('.container-fluid').find('.block_7').find(inCard.topCardTotalQuantity).should('contain', '0')
    cy.get('.container-fluid').find('.block_7').find(inCard.topCardTotalPrice).should('contain', '$0.00')
}
topCardIsNotEmpty(){
    cy.get('.container-fluid').find('.block_7').find(inCard.topCardTotalQuantity).should('not.contain', '0')
    cy.get('.container-fluid').find('.block_7').find(inCard.topCardTotalPrice).should('not.contain', '$0.00')
}
priceInCardMatchPriceInTopCard(){
    cy.get('#totals_table').find('tbody tr').eq(0).find('td').eq(1).invoke('prop','textContent').then(price =>{
        cy.get('.container-fluid').find('.block_7').find(inCard.topCardTotalPrice).should('contain', price)
    })
}    
quantityOfAllProductsInCardMatchQuantityInTopCard(){
    var counter = 0
    cy.get('[class="container-fluid cart-info product-list"]').find('tbody tr').each((row, index)=>{
        if(index >=1){
        cy.wrap(row).find('td').eq(4).find('[type="text"]').invoke('prop','value').then(x => {
         counter = counter + parseInt(x) 
         cy.wrap(counter).as('counter')
        })
        }
    })
    cy.get('@counter').then(allProductsQuantity =>
    cy.get('.container-fluid').find('.block_7').find(inCard.topCardTotalQuantity).should('contain', allProductsQuantity))
    }
}
export const inCard = new insideCard()