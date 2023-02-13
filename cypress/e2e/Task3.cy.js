import { addToCard } from "../support/page_objects/addToCard"
import { navigateTo } from "../support/page_objects/navigationPage"

describe('The quantity and value of the basket above the menu bar of the website changes', () => {
    beforeEach('Open Automation Test store', () => {
      cy.visit('/')
    })
    it('Add one product to cart', () => {
        cy.get('.container-fluid').find('[class="label label-orange font14"]').should('contain', '0')
        cy.get('.container-fluid').find('.cart_total').should('contain', '$0.00')
        navigateTo.TshirtPage()
        addToCard.addTshirtToCard()
        cy.get('.container-fluid').find('[class="label label-orange font14"]').should('not.contain', '0')
        cy.get('.container-fluid').find('.cart_total').should('not.contain', '$0.00')
        cy.get('#totals_table').find('tbody tr').eq(0).find('td').eq(1).invoke('prop','textContent').then(price =>{
            cy.get('.container-fluid').find('.cart_total').should('contain', price)
        })
        cy.get('[class="table table-striped table-bordered"]').find('tbody tr').eq(1).find('td').find('[type="text"]').invoke('attr','value').then(quantity =>{
            cy.get('.container-fluid').find('.block_7').find('[class="label label-orange font14"]').should('contain', quantity)
        })
    })
    it('Add one product twice to cart', () => {
        cy.get('.container-fluid').find('[class="label label-orange font14"]').should('contain', '0')
        cy.get('.container-fluid').find('.cart_total').should('contain', '$0.00')
        navigateTo.TshirtPage()
        addToCard.addTshirtToCard()
        navigateTo.TshirtPage()
        addToCard.addTshirtToCard()
        cy.get('.container-fluid').find('[class="label label-orange font14"]').should('not.contain', '0')
        cy.get('.container-fluid').find('.cart_total').should('not.contain', '$0.00')
        cy.get('#totals_table').find('tbody tr').eq(0).find('td').eq(1).invoke('prop','textContent').then(price =>{
            cy.get('.container-fluid').find('.cart_total').should('contain', price)
        })
        cy.get('[class="table table-striped table-bordered"]').find('tbody tr').eq(1).find('td').find('[type="text"]').invoke('attr','value').then(quantity =>{
            cy.get('.container-fluid').find('.block_7').find('[class="label label-orange font14"]').should('contain', quantity)
        })
    })
    it.only('Add one product twice to cart', () => {
        cy.get('.container-fluid').find('[class="label label-orange font14"]').should('contain', '0')
        cy.get('.container-fluid').find('.cart_total').should('contain', '$0.00')
        
        
        addToCard.addProductToCardByUsingSearchBox('lipstick')
        addToCard.addProductToCardByUsingSearchBox('lipstick')
        navigateTo.TshirtPage()
        addToCard.addTshirtToCard()

        cy.get('#totals_table').find('tbody tr').eq(0).find('td').eq(1).invoke('prop','textContent').then(price =>{
            cy.get('.container-fluid').find('.cart_total').should('contain', price)
        })
        var counter = 0
        cy.get('[class="container-fluid cart-info product-list"]').find('tbody tr').each((row, index)=>{
            if(index >=1){
            cy.wrap(row).find('td').eq(4).find('[type="text"]').invoke('prop','value').then(x => {
             counter = counter + parseInt(x) 
             console.log(x)     
             console.log(counter)
             cy.wrap(counter).as('counter')
            
            })
            }
        })
        cy.get('@counter').then(v =>
        cy.get('.container-fluid').find('.block_7').find('[class="label label-orange font14"]').should('contain', v))
    })
})