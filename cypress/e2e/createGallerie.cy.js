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

    before("visit app and log in", () => {
        cy.visit("/login");
        loginPage.login(credetials.email, credetials.password);
        cy.url().should("not.include", "/login");
      });
    
      it("create gallery", () => {
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