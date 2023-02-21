import { addToCard } from "../support/page_objects/addToCard"
import { onCheckOutForm } from "../support/page_objects/checkoutForms"
import { navigateTo } from "../support/page_objects/navigationPage"

describe('Add to card 3 products and order', () => {
  it('Happy Path', () => {
    cy.visit('/')
    navigateTo.TshirtPage()
    addToCard.addTshirtToCard('Casual 3/4 Sleeve Baseball T-Shirt')
    navigateTo.ShoesPage()
    addToCard.addShoesToCard('Fiorella Purple Peep Toes')
    addToCard.addProductToCardByUsingSearchBox('eye')
    addToCard.cartCheckOutGuestCheckoutOption()
    onCheckOutForm.guestFormPersonalDetails('Herkules', 'Poirot', 'Poirot@example.com')
    onCheckOutForm.guestFormAddress('Whitehaven Mansions', 'London', 'Greater London', 'E1 7AY', 'United Kingdom')
    onCheckOutForm.confirmOrder()
  })
})
