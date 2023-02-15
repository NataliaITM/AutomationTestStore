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
   addToCard.addProductToCardByUsingSearchBox('eye')
   addToCard.cartCheckOutGuestCheckoutOption()
   onCheckOutForm.guestFormPersonalDetails('Herkules','Poirot','Poirot@example.com')
   onCheckOutForm.guestFormAddress('Whitehaven Mansions','London','Greater London','E1 7AY','United Kingdom' )
   onCheckOutForm.confirmOrder()
  })
})
