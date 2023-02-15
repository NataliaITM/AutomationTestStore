import { addToCard } from "../support/page_objects/addToCard"
import { inCard } from "../support/page_objects/inCard"
import { navigateTo } from "../support/page_objects/navigationPage"

describe('The quantity and value of the basket above the menu bar of the website changes', () => {
    beforeEach('Open Automation Test store', () => {
        cy.visit('/')
    })
    it('Add one product to cart', () => {
        inCard.topCardIsEmpty()
        navigateTo.TshirtPage()
        addToCard.addTshirtToCard()
        inCard.topCardIsNotEmpty()
        inCard.priceInCardMatchPriceInTopCard()
        inCard.quantityOfAllProductsInCardMatchQuantityInTopCard()
    })
    it('Add one product twice to cart', () => {
        inCard.topCardIsEmpty()
        navigateTo.TshirtPage()
        addToCard.addTshirtToCard()
        navigateTo.TshirtPage()
        addToCard.addTshirtToCard()
        inCard.topCardIsNotEmpty()
        inCard.priceInCardMatchPriceInTopCard()
        inCard.quantityOfAllProductsInCardMatchQuantityInTopCard()
    })
    it('Add many products to cart', () => {
        inCard.topCardIsEmpty()
        addToCard.addProductToCardByUsingSearchBox('lipstick')
        addToCard.addProductToCardByUsingSearchBox('t-shirt')
        addToCard.addProductToCardByUsingSearchBox('ck IN2U')
        inCard.priceInCardMatchPriceInTopCard()
        inCard.quantityOfAllProductsInCardMatchQuantityInTopCard()
    })
})