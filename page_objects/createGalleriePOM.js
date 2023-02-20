class CreateGalleriePage {

    get createGalleryHeading() {
        return cy.get("h1");
      }
    
      get createGalleryLink() {
        return cy.get(".nav-link").eq(2);
      }
    
      get galleryTitleInput() {
        return cy.get("#title");
      }
    
      get galleryDescriptionInput() {
        return cy.get("#description");
      }
    
      get addImageBtn() {
        return cy.get("button").eq(-3);
      }
    
      get imageUrlInput() {
        return cy.get(".input-group");
      }
    
      get createGalleryUpBtn() {
        return this.imageUrlInput.find("button").first();
      }
    
      get createGalleryDownBtn() {
        return this.imageUrlInput.find("button").last();
      }
    
      get submitButton() {
        return cy.get("button").eq(-1);
      }
    
      createGallery(title, desc, imageUrl) {
        this.galleryTitleInput.type(title);
        this.galleryDescriptionInput.type(desc);
        this.imageUrlInput.type(imageUrl);
        this.submitButton.click();
      }
}

export const createGalleriePage = new CreateGalleriePage();