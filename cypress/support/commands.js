// Import cypress-xpath
require('cypress-xpath');

Cypress.Commands.add('fillRegistrationForm', (user) => {
    cy.get('input[name="title"]').type(user.title);
    cy.get('input[name="first_name"]').type(user.firstName);
    cy.get('input[name="last_name"]').type(user.lastName);
    cy.get('input[name="email"]').type(user.email);
    cy.get('input[name="password"]').type(user.password);
    cy.get('input[name="postcode"]').type(user.postcode);
    cy.get('input[id="Address_PhoneNumber"]').type(user.phoneNumber);
    cy.get('button[aria-label="Find"]').click();
    cy.get('input[name="terms"]').check();
    cy.get('button[aria-label="Save & Continue"]').click();
});