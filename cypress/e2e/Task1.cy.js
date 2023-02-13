import { addToCard } from "../support/page_objects/addToCard"
import { onCheckOutForm } from "../support/page_objects/checkoutForms"
import { navigateTo } from "../support/page_objects/navigationPage"

describe('Add to card 3 products and order', () => {
  beforeEach('Open Automation Test store', () => {
    cy.visit('/')
  })
  it('Happy Path', () => {
   navigateTo.TshirtPage()
   addToCard.addTshirtToCard()
   navigateTo.ShoesPage()
   addToCard.addShoesToCard()
   addToCard.addProductToCardByUsingSearchBox('lipstick')
   addToCard.cartCheckOutGuestCheckoutOption()
   onCheckOutForm.guestFormPersonalDetails('Herkules','Poirot','Poirot@example.com')
   onCheckOutForm.guestFormAddress('Whitehaven Mansions','London','Greater London','E1 7AY' )
  cy.get('#checkout_btn').click()
  cy.get('[class="maintext"]').contains('Your Order Has Been Processed!')
  cy.get('[class="mb40"]').contains('Continue').click()
  })
})
