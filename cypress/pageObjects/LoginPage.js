class LoginPage {
    visit() {
        cy.visit('/account/login');
    }

    getRegisterButton() {
        return cy.get('a[class="signIn__register signIn__register--personal"]');
    }
}

export default LoginPage;
