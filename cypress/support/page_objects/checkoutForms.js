export class checkOutForm {

    guestFormPersonalDetails(firstname,lastname,email){
        cy.get('#guestFrm').then(guestForm => {
            cy.wrap(guestForm).find('#guestFrm_firstname').type(firstname)
            cy.wrap(guestForm).find('#guestFrm_lastname').type(lastname)
            cy.wrap(guestForm).find('#guestFrm_email').type(email)
           })
    }
    guestFormAddress(address,city,region_state,postcode){
        cy.get('#guestFrm').then(guestForm => {
            if (address !== null)cy.wrap(guestForm).find('#guestFrm_address_1').type(address)
            if (city !== null)cy.wrap(guestForm).find('#guestFrm_city').type(city)
            if (region_state !== null)cy.wrap(guestForm).find('#guestFrm_zone_id').select(region_state)
            if (postcode !== null)cy.wrap(guestForm).find('#guestFrm_postcode').type(postcode)
            cy.wrap(guestForm).find('button').click()
           })
    }
    
}

export const onCheckOutForm = new checkOutForm()