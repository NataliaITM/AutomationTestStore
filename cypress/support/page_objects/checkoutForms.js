export class checkOutForm {
    firstNameField = '#guestFrm_firstname'
    lastnameField = '#guestFrm_lastname'
    emailField = '#guestFrm_email'
    addressField = '#guestFrm_address_1'
    countryField = '#guestFrm_country_id'
    cityField = '#guestFrm_city'
    region_stateField = '#guestFrm_zone_id'
    postcodeField = '#guestFrm_postcode'
    confirmOrderButton = '#checkout_btn[title="Confirm Order"]'
    visibleHelpBlock = '.help-block:visible'

    guestFormPersonalDetails(firstname, lastname, email) {
        cy.get('#maincontainer').find('#guestFrm[enctype="multipart/form-data"]').then(guestForm => {
            cy.wrap(guestForm).find(onCheckOutForm.firstNameField).type(firstname)
            cy.wrap(guestForm).find(onCheckOutForm.lastnameField).type(lastname)
            cy.wrap(guestForm).find(onCheckOutForm.emailField).type(email)
        })
    }
    guestFormAddress(address, city, region_state, postcode, country) {
        cy.get('#maincontainer').find('#guestFrm[enctype="multipart/form-data"]').then(guestForm => {
            if (address !== null) cy.wrap(guestForm).find(onCheckOutForm.addressField).type(address)
            if (city !== null) cy.wrap(guestForm).find(onCheckOutForm.cityField).type(city)
            cy.wrap(guestForm).find(onCheckOutForm.countryField).select(country)
            if (region_state !== null) cy.wrap(guestForm).find(onCheckOutForm.region_stateField).select(region_state)
            if (postcode !== null) cy.wrap(guestForm).find(onCheckOutForm.postcodeField).type(postcode)
            cy.wrap(guestForm).find('button[type="submit"]').click()
        })
    }
    addressValidationMessage() {
        cy.get(onCheckOutForm.visibleHelpBlock).should('contain', 'Address 1 must be greater than 3 and less than 128 characters!')
    }
    cityValidationMessage() {
        cy.get(onCheckOutForm.visibleHelpBlock).should('contain', 'City must be greater than 3 and less than 128 characters!')
    }
    region_stateValidationMessage() {
        cy.get(onCheckOutForm.visibleHelpBlock).should('contain', 'Please select a region / state!')
    }
    zip_postecodeValidationMessage() {
        cy.get(onCheckOutForm.visibleHelpBlock).should('contain', 'Zip/postal code must be between 3 and 10 characters!')
    }
    zip_postecodeValidationMessage() {
        cy.get(onCheckOutForm.visibleHelpBlock).should('contain', 'Zip/postal code must be between 3 and 10 characters!')
    }
    countryValidationMessage() {
        cy.get(onCheckOutForm.visibleHelpBlock).should('contain', 'Please select a country!')
    }
    confirmOrder() {
        cy.get(onCheckOutForm.confirmOrderButton).click()
        cy.get('#maincontainer').find('[class="maintext"]').should('contain', 'Your Order Has Been Processed!')
    }
}

export const onCheckOutForm = new checkOutForm()