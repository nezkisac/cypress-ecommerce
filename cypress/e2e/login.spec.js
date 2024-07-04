import LoginPage from '../pageObjects/LoginPage';

describe('Login and Navigation Tests', () => {
    const loginPage = new LoginPage();

    beforeEach(() => {
        cy.visit('/account/login');
    });

    it('AC2: Should navigate to registration page when clicking Register personal account button', () => {
        loginPage.getRegisterButton().click();
        cy.url().should('include', '/account/register_personal');
    });
});
