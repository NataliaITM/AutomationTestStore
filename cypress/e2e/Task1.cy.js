import { addToCard } from "../support/page_objects/addToCard"
import { onCheckOutForm } from "../support/page_objects/checkoutForms"
import { navigateTo } from "../support/page_objects/navigationPage"

describe('Task 1', () => {
  beforeEach('Open Automation Test store', () => {
    cy.visit('/')
  })
  it('Task 1', () => {
   navigateTo.TshirtPage()
   addToCard.addTshirtToCard()
   navigateTo.ShoesPage()
   addToCard.addShoesToCard()
   addToCard.addProductToCardByUsingSearchBox('lipstick')
   cy.get('#cart_checkout1').click()

   cy.get('#accountFrm').then(chceckoutOptions => {
    cy.wrap(chceckoutOptions).find('#accountFrm_accountguest').click()
    cy.wrap(chceckoutOptions).find('button').click()
   })
   onCheckOutForm.guestForm('Herkules','Poirot','Poirot@example.com', 'Whitehaven Mansions','London','Greater London','E1 7AY' )
  cy.get('#checkout_btn').click()
  cy.get('[class="maintext"]').contains('Your Order Has Been Processed!')
  cy.get('[class="mb40"]').contains('Continue').click()
  })
  
})