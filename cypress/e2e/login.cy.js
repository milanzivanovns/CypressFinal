/// <reference types="Cypress" />

import { loginPage } from "../../page_objects/loginPOM";
import { faker } from '@faker-js/faker';

const credetials = {
    email: "vivifytest@gmail.com",
    password: "12345678",

    invalidEmail: faker.internet.email(),
    invalidPassword: faker.lorem.word()
}


describe("Login page test", () => {
    beforeEach("visit app and click the login link", () => {
        cy.visit("/");
        loginPage.loginLink.click();
        cy.url().should("include","/login");
        loginPage.loginPageHeading.should("be.visible");
        loginPage.loginPageHeading.should("have.text", "Please login")
    })

    it("Invalid Login", () => {
        loginPage.login(credetials.invalidEmail, credetials.invalidPassword);
        cy.url().should("include", "/login")
        loginPage.errorMessage.should("be.visible")
        .and("have.text", "Bad Credentials")
        .and("have.css", "background-color", "rgb(248, 215, 218)")
        .and("have.class", "alert-danger")
    });

    it.only("Valid login", () => {
        loginPage.login(credetials.email, credetials.password);
        cy.url().should("not.include", "/login");
    })
});
