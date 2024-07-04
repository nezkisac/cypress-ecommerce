import RegisterPage from '../pageObjects/RegisterPage';

describe('Customer Registration', () => {
    const registerPage = new RegisterPage();

    beforeEach(() => {
        cy.visit('/');
    });

    it('AC1: Should show login and registration buttons when clicking Register', () => {
        cy.contains('strong','Register').click();
        cy.contains('strong','Sign in').should('be.visible');
        cy.contains('strong','Register').should('be.visible');
    });

    it('AC2: Should show registration form when clicking Register personal account button on login page', () => {
        cy.visit('/account/login');
        cy.xpath('//div[@class="checkoutPanel__body checkoutPanel__body--register clearfix"]//a[1]').click();
        cy.url().should('include', '/account/register_personal');
    });

    context('Registration Page Validation', () => {
        beforeEach(() => {
            cy.visit('/account/register_personal');
        });

        it('AC3: Should show errors for required fields', () => {
            registerPage.getSaveAndContinueButton().click();
            registerPage.getErrorMessage('Title').should('contain', 'The Title field is required.');
            registerPage.getErrorMessage('First Name').should('contain', 'The First Name field is required.');
            registerPage.getErrorMessage('Last Name').should('contain', 'The Last Name field is required.');
            registerPage.getErrorMessage('Email').should('contain', 'The Email Address field is required.');
            registerPage.getErrorMessage('Password').should('contain', 'The Password field is required.');
            registerPage.getErrorMessage('terms').should('contain', 'Please accept the terms and conditions to continue');
        });

        it('AC4: Should show address suggestions when a valid postcode is entered', () => {
            registerPage.getPostcodeField().type('SW1A 1AA');
            registerPage.getFindButton().click();
            cy.get('.addAddress__addressResults ').should('be.visible');
            cy.get('.addAddress__addressResults input').should('be.visible');
        });

        it('AC5: Should register a customer with valid details', () => {
            const uniqueEmail = `testuser${Date.now()}@example.com`
            cy.fixture('userData').then((data) => {
                const user = {...data.validUser,
                    email:uniqueEmail

                };
                cy.log(user);
                registerPage.getTitleField().select(1);
                registerPage.getFirstNameField().type(user.firstName);
                registerPage.getLastNameField().type(user.lastName);
                registerPage.getEmailField().type(user.email);
                registerPage.getPasswordField().type(user.password);
                registerPage.getPostcodeField().type(user.postcode);
                registerPage.getFindButton().click();
                cy.get('.addAddress__addressResults input').first().click();
                registerPage.getPhoneField().type(user.phoneNumber);
                registerPage.getTermsCheckbox().check();
                registerPage.getSaveAndContinueButton().click();
                cy.url().should('not.include', '/account/register_personal');
                registerPage.getAccountButton().click();
                registerPage.getAccountNameHeader().should('contain', `${user.firstName} ${user.lastName}`);
            });
        });
    });
});
