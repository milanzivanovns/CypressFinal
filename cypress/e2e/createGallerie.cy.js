/// <reference types="Cypress" />

import { loginPage } from "../../page_objects/loginPOM";
import { createGalleriePage } from "../../page_objects/createGalleriePOM";
import { allGalleriesPage } from "../../page_objects/allGalleriesPOM";
import { faker } from '@faker-js/faker';

const credetials = {
    email: "vivifytest@gmail.com",
    password: "12345678",
};

let galleryData = {
    title: faker.lorem.word(),
    description: faker.lorem.paragraph(),
    imageUrl: faker.image.imageUrl() + ".jpg",
  };

describe("Create Gallerie page test", () => {

    before("Visit app and log in", () => {
        // cy.visit("/login");
        // loginPage.login(credetials.email, credetials.password);
        // cy.url().should("not.include", "/login");

        // ** Login preko pisanja coda za Request:
        // cy.request({
        //   method: "POST",
        //   url: "https://gallery-api.vivifyideas.com/api/auth/login",
        //   body: {
        //     email: credetials.email,
        //     password: credetials.password
        //   }
        // })
        // .its("body")
        // .then((response) => {
        //   window.localStorage.setItem("token", response.access_token);
        // });

        // ** Login preko custom funkcije koju smo mi napravili u commands.js file-u
          cy.loginViaBackend(credetials.email, createGalleriePage.password);
      });
    
      it("Create gallery", () => {
        //Visit smo stavili ovde sada jer gore code za request se odradi mi se ulogujemo ali nista "ne posecujemo"
        cy.visit("/create");
        createGalleriePage.createGalleryLink.click();
        createGalleriePage.createGalleryHeading
          .should("be.visible")
          .and("have.text", "Create Gallery");
    
          createGalleriePage.createGallery(
          galleryData.title,
          galleryData.description,
          galleryData.imageUrl
        );
    
        allGalleriesPage.singleGallery
          .find("h2")
     //     .should("have.text", galleryData.title);
      });

});