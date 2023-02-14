export class checkOutForm {
    firstNameField = '#guestFrm_firstname'
    lastnameField = '#guestFrm_lastname'
    emailField = '#guestFrm_email'
    addressField = '#guestFrm_address_1'
    cityField = '#guestFrm_city'
    region_stateField = '#guestFrm_zone_id'
    postcodeField = '#guestFrm_postcode'

    guestFormPersonalDetails(firstname,lastname,email){
        cy.get('#guestFrm').then(guestForm => {
            cy.wrap(guestForm).find(onCheckOutForm.firstNameField).type(firstname)
            cy.wrap(guestForm).find(onCheckOutForm.lastnameField).type(lastname)
            cy.wrap(guestForm).find(onCheckOutForm.emailField).type(email)
           })
    }
    guestFormAddress(address,city,region_state,postcode){
        cy.get('#guestFrm').then(guestForm => {
            if (address !== null)cy.wrap(guestForm).find(onCheckOutForm.addressField).type(address)
            if (city !== null)cy.wrap(guestForm).find(onCheckOutForm.cityField).type(city)
            if (region_state !== null)cy.wrap(guestForm).find(onCheckOutForm.region_stateField).select(region_state)
            if (postcode !== null)cy.wrap(guestForm).find(onCheckOutForm.postcodeField).type(postcode)
            cy.wrap(guestForm).find('button').click()
           })
    }
    
}

export const onCheckOutForm = new checkOutForm()