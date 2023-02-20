class AllGalleriesPage {

    get allGalleriesHeading() {
        return cy.get("h1");
      }
    
      get searchInput() {
        return cy.get("input");
      }
    
      get filterBtn() {
        return cy.get("button").first();
      }
    
      get loadMoreBtn() {
        return cy.get("button").last();
      }
    
      get allGalleries() {
        return cy.get(".grid").children();
      }
    
      get singleGallery() {
        return cy.get(".cell").first();
      }
    
      get singleGalleryHeading() {
        return this.singleGallery.find("h2");
      }
    
      search(searchTerm) {
        this.searchInput.type(searchTerm);
        this.filterBtn.click();
      }

}

export const allGalleriesPage = new AllGalleriesPage();