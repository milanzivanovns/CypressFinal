class RegisterPage {

        get registerLink() {
        return cy.get(".nav-link").eq(2).click();
    }

    get firstNameInput() {
        return cy.get("#first-name");
    }

    get lastNameInput() {
        return cy.get("#last-name");
    }

    get emailInput() {
        return cy.get("#email");
    }

    get passwordInput() {
        return cy.get("#password");
    }

    get passwordConfirmationInput() {
        return cy.get("#password-confirmation")
    }

    get tosCheckBox() {
        return cy.get(":checkbox");
    }

    get submitButton() {
        return cy.get("button");
    }

    registerUserWithValidData(firstName, lastName, email, password, confirmationPassword) {
        this.firstNameInput.type(firstName);
        this.lastNameInput.type(lastName);
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.passwordConfirmationInput.type(confirmationPassword);
        this.tosCheckBox.check();
        this.submitButton.click();
    }

}

export const registerPage = new RegisterPage();