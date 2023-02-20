/// <reference types="Cypress" />

import { loginPage } from "../../page_objects/loginPOM";
import { faker } from '@faker-js/faker';

const credetials = {
    email: "vivifytest@gmail.com",
    password: "12345678",

    invalidEmail: faker.internet.email(),
    invalidPassword: faker.lorem.word()
};


describe("Login page test", () => {
    beforeEach("visit app and click the login link", () => {
        cy.visit("/");
        loginPage.loginLink.click();
        cy.url().should("include","/login");
        loginPage.loginPageHeading.should("be.visible");
        loginPage.loginPageHeading.should("have.text", "Please login")
    });

    it.only("Invalid Login", () => {
        cy.intercept({
            method: "POST",
            url: "https://gallery-api.vivifyideas.com/api/auth/login"
        }).as("unsuccesfulLogin");

        loginPage.login(credetials.invalidEmail, credetials.invalidPassword);

        cy.wait("@unsuccesfulLogin").then((interception) => {
            console.log("INTERCEPTION", interception);
            expect(interception.response.statusCode).eq(401);
            expect(interception.response.statusMessage).to.eq("Unauthorized");
        });

        cy.url().should("include", "/login")
        loginPage.errorMessage.should("be.visible")
        .and("have.text", "Bad Credentials")
        .and("have.css", "background-color", "rgb(248, 215, 218)")
        .and("have.class", "alert-danger")
    });

    it("Valid login", () => {
        //Interesptori sluze nam za prvenstveno za cekanje nekog zahteva, recimo da cekamo da se ucita neka stranica
        cy.intercept({
            method: "POST",
            url: "https://gallery-api.vivifyideas.com/api/auth/login"
        }).as("succesfulLogin");

        loginPage.login(credetials.email, credetials.password);
        cy.wait("@succesfulLogin").then((interception) => {
            console.log("INTERCEPTION", interception);
            expect(interception.response.statusCode).eq(200);
        });

        cy.url().should("not.include", "/login");
    })
});
