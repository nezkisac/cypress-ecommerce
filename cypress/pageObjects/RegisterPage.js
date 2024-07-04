class RegisterPage {
    visit() {
        cy.visit('/account/register_personal');
    }

    getTitleField() {
        return cy.get('select[id="YourDetails_Title"]');
    }

    getFirstNameField() {
        return cy.get('input[id="Address_FirstName"]');
    }

    getLastNameField() {
        return cy.get('input[id="Address_LastName"]');
    }

    getEmailField() {
        return cy.get('input[id="LoginDetails_Email"]');
    }

    getPasswordField() {
        return cy.get('input[id="LoginDetails_Password"]');
    }

    getPostcodeField() {
        return cy.get('input[id="Address_PostCodeLookup"]');
    }

    getPhoneField() {
        return cy.get('input[id="Address_PhoneNumber"]');
    }

    getFindButton() {
        return cy.get('button[data-input=".addAddress__postcode"]');
    }

    getTermsCheckbox() {
        return cy.get('input[id="AgreeToTc"]');
    }

    getAccountButton() {
        return cy.get('li[class="masthead__accountTab masthead__noneStickyAccountTab"]');
    }

    getAccountNameHeader() {
        return cy.get('div[class="masthead__main masthead__container"] h1');
    }

    getSaveAndContinueButton() {
        return cy.get('input[type="submit"]');
    }

    getErrorMessage(field) {
        return cy.contains('span', `${field}`);

    }
}

export default RegisterPage;
