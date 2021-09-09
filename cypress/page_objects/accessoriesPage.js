class AccessoriesPage {
    open() {
        cy.visit(`${Cypress.env('googleUrl')}/collection/accessories_wall?hl=en-US`);
    }

    get searchIcon () {
        return cy.get('button[jsname="vLv7Lb"]');
    }

    get searchInput () {
        return cy.get('input[aria-label="Search Google Store"]');
    }

    performSearch(productToSearch) {
        this.searchIcon.click();

        this.searchInput.should('be.enabled').type(`${productToSearch}{enter}`);
    }
}

export default new AccessoriesPage()