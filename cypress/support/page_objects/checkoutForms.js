export class checkOutForm {

    guestForm(firstname,lastname,email,address,city,region_state,postcode){
        cy.get('#guestFrm').then(guestForm => {
            cy.wrap(guestForm).find('#guestFrm_firstname').type(firstname)
            cy.wrap(guestForm).find('#guestFrm_lastname').type(lastname)
            cy.wrap(guestForm).find('#guestFrm_email').type(email)
            cy.wrap(guestForm).find('#guestFrm_address_1').type(address)
            cy.wrap(guestForm).find('#guestFrm_city').type(city)
            cy.wrap(guestForm).find('#guestFrm_zone_id').select(region_state)
            cy.wrap(guestForm).find('#guestFrm_postcode').type(postcode)
            cy.wrap(guestForm).find('button').click()
           })
    }
    
}

export const onCheckOutForm = new checkOutForm()