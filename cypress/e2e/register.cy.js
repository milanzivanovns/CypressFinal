/// <reference types="Cypress" />

import { registerPage } from "../../page_objects/registerPOM";
import { faker } from "@faker-js/faker";

const credetials = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.lorem.word(8) + 1
    
    }

describe("Register page test", () => {
    before("visit app and click the register link", () => {
        cy.visit("/");
        registerPage.registerLink.click();
        cy.url().should("contain", "/register");
    })

    it("Valid user registration", () => {
        registerPage.registerUserWithValidData(
            credetials.firstName, 
            credetials.lastName, 
            credetials.email, 
            credetials.password, 
            credetials.password);
    })
})