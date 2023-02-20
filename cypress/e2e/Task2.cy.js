import { addToCard } from "../support/page_objects/addToCard"
import { onCheckOutForm } from "../support/page_objects/checkoutForms"
import { navigateTo } from "../support/page_objects/navigationPage"

describe('Adress field', () => {
  beforeEach('Open Automation Test store', () => {
    cy.visit('/')
  })
  it('Field adress was not filled up', () => {
    navigateTo.TshirtPage()
    addToCard.addTshirtToCard('Casual 3/4 Sleeve Baseball T-Shirt')
    addToCard.cartCheckOutGuestCheckoutOption()
    onCheckOutForm.guestFormPersonalDetails('Herkules', 'Poirot', 'Poirot@example.com')
    onCheckOutForm.guestFormAddress(null, 'London', 'Greater London', 'E1 7AY', 'United Kingdom')
    onCheckOutForm.addressValidationMessage()
  })
  it('Field adress was too short', () => {
    navigateTo.TshirtPage()
    addToCard.addTshirtToCard('Casual 3/4 Sleeve Baseball T-Shirt')
    addToCard.cartCheckOutGuestCheckoutOption()
    onCheckOutForm.guestFormPersonalDetails('Herkules', 'Poirot', 'Poirot@example.com')
    onCheckOutForm.guestFormAddress('Ab', 'London', 'Greater London', 'E1 7AY', 'United Kingdom')
    onCheckOutForm.addressValidationMessage()
  })
  it('Field adress was too long', () => {
    navigateTo.TshirtPage()
    addToCard.addTshirtToCard('Casual 3/4 Sleeve Baseball T-Shirt')
    addToCard.cartCheckOutGuestCheckoutOption()
    onCheckOutForm.guestFormPersonalDetails('Herkules', 'Poirot', 'Poirot@example.com')
    onCheckOutForm.guestFormAddress('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu velit, faucibus in turpis ac, aliquet luctus turpis. Lorem ip', 'London', 'Greater London', 'E1 7AY', 'United Kingdom')
    onCheckOutForm.addressValidationMessage()
  })
})
describe('City field', () => {
  beforeEach('Open Automation Test store', () => {
    cy.visit('/')
  })
  it('Field city was not filled up', () => {
    navigateTo.TshirtPage()
    addToCard.addTshirtToCard('Casual 3/4 Sleeve Baseball T-Shirt')
    addToCard.cartCheckOutGuestCheckoutOption()
    onCheckOutForm.guestFormPersonalDetails('Herkules', 'Poirot', 'Poirot@example.com')
    onCheckOutForm.guestFormAddress('Whitehaven Mansions', null, 'Greater London', 'E1 7AY', 'United Kingdom')
    onCheckOutForm.cityValidationMessage()
  })
  it('Field city was to short', () => {
    navigateTo.TshirtPage()
    addToCard.addTshirtToCard('Casual 3/4 Sleeve Baseball T-Shirt')
    addToCard.cartCheckOutGuestCheckoutOption()
    onCheckOutForm.guestFormPersonalDetails('Herkules', 'Poirot', 'Poirot@example.com')
    onCheckOutForm.guestFormAddress('Whitehaven Mansions', 'Ab', 'Greater London', 'E1 7AY', 'United Kingdom')
    onCheckOutForm.cityValidationMessage()
  })
  it('Field city was to long', () => {
    navigateTo.TshirtPage()
    addToCard.addTshirtToCard('Casual 3/4 Sleeve Baseball T-Shirt')
    addToCard.cartCheckOutGuestCheckoutOption()
    onCheckOutForm.guestFormPersonalDetails('Herkules', 'Poirot', 'Poirot@example.com')
    onCheckOutForm.guestFormAddress('Whitehaven Mansions', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu velit, faucibus in turpis ac, aliquet luctus turpis. Lorem ip', 'Greater London', 'E1 7AY', 'United Kingdom')
    onCheckOutForm.cityValidationMessage()
  })
})
describe('Region / State field', () => {
  it('Field Region / State was not filled up', () => {
    cy.visit('/')
    navigateTo.TshirtPage()
    addToCard.addTshirtToCard('Designer Men Casual Formal Double Cuffs Grandad Band Collar Shirt Elegant Tie')
    addToCard.cartCheckOutGuestCheckoutOption()
    onCheckOutForm.guestFormPersonalDetails('Herkules', 'Poirot', 'Poirot@example.com')
    onCheckOutForm.guestFormAddress('Whitehaven Mansions', 'London', null, 'E1 7AY', 'United Kingdom')
    onCheckOutForm.region_stateValidationMessage()
  })
})
describe('ZIP/Post Code field', () => {
  beforeEach('Open Automation Test store', () => {
    cy.visit('/')
  })
  it('Field ZIP/Post Code was not filled up', () => {
    navigateTo.TshirtPage()
    addToCard.addTshirtToCard('Casual 3/4 Sleeve Baseball T-Shirt')
    addToCard.cartCheckOutGuestCheckoutOption()
    onCheckOutForm.guestFormPersonalDetails('Herkules', 'Poirot', 'Poirot@example.com')
    onCheckOutForm.guestFormAddress('Whitehaven Mansions', 'London', 'Greater London', null, 'United Kingdom')
    onCheckOutForm.zip_postecodeValidationMessage()
  })
  it('Field ZIP/Post Code was too short', () => {
    navigateTo.ShoesPage()
    addToCard.addShoesToCard('New Ladies High Wedge Heel Toe Thong Diamante Flip Flop Sandals')
    addToCard.cartCheckOutGuestCheckoutOption()
    onCheckOutForm.guestFormPersonalDetails('Herkules', 'Poirot', 'Poirot@example.com')
    onCheckOutForm.guestFormAddress('Whitehaven Mansions', 'London', 'Greater London', 'Ab', 'United Kingdom')
    onCheckOutForm.zip_postecodeValidationMessage()
  })
  it('Field ZIP/Post Code was too long', () => {
    navigateTo.ShoesPage()
    addToCard.addShoesToCard('Womens high heel point toe stiletto sandals ankle strap court shoes')
    addToCard.cartCheckOutGuestCheckoutOption()
    onCheckOutForm.guestFormPersonalDetails('Herkules', 'Poirot', 'Poirot@example.com')
    onCheckOutForm.guestFormAddress('Whitehaven Mansions', 'London', 'Greater London', 'Lorem ipsum', 'United Kingdom')
    onCheckOutForm.zip_postecodeValidationMessage()
  })
})
describe('Country field', () => {
  it('Field Country was not filled up', () => {
    cy.visit('/')
    navigateTo.ShoesPage()
    addToCard.addShoesToCard('Ruby Shoo Womens Jada T-Bar')
    addToCard.cartCheckOutGuestCheckoutOption()
    onCheckOutForm.guestFormPersonalDetails('Herkules', 'Poirot', 'Poirot@example.com')
    onCheckOutForm.guestFormAddress('Whitehaven Mansions', 'London', null, 'E1 7AY', 'FALSE')
    onCheckOutForm.countryValidationMessage()
  })
})