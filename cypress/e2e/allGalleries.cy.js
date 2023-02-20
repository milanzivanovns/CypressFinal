/// <reference types="Cypress" />

import { loginPage } from "../../page_objects/loginPOM";
import { allGalleriesPage } from "../../page_objects/allGalleriesPOM";
import { faker } from '@faker-js/faker';

const credetials = {
    email: "vivifytest@gmail.com",
    password: "12345678",
};

describe("All Galleries test", () => {

    beforeEach("", () => {
        cy.visit("/login");
        loginPage.login(credetials.email, credetials.password);
        cy.url().should("not.include", "/login");
    })

    it.only("loads page successfully", () => {
        allGalleriesPage.allGalleriesHeading
        .should("be.visible")
        .and("exist")
        .and("have.text", "All Galleries");

        allGalleriesPage.singleGallery
          .find("img")
          .should("be.visible");
    });

  it("Test pagination", () => {
    allGalleriesPage.allGalleries.should("be.visible").and("have.length", 10);
    allGalleriesPage.loadMoreBtn.click();
    allGalleriesPage.allGalleries.should("be.visible").and("have.length", 20);
    allGalleriesPage.loadMoreBtn.click();
    allGalleriesPage.allGalleries.should("be.visible").and("have.length", 30);
  });

  it("Test search", () => {
    let searchTerm = "Gallery with 2 images";

    allGalleriesPage.search(searchTerm);
    allGalleriesPage.allGalleries.should("be.visible").and("have.length", 6);
    allGalleriesPage.singleGallery.find("a").first().click();
    cy.get("h1").should("be.visible").and("have.text", searchTerm);
  });

  it("Click on gallery title redirects to single gallery page", () => {
    allGalleriesPage.singleGallery.find("a").first().click();
  });

  it("Click on gallery author redirects to authors' page", () => {
    allGalleriesPage.singleGallery.find("a").eq(1).click();
  });

});