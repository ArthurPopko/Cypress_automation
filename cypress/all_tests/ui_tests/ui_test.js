/// <reference types="cypress" />
import SearchResultsPage from "../../page_objects/searchResultsPage";
import AccessoriesPage from "../../page_objects/accessoriesPage";

describe('UI test for google store', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
// returning false here prevents Cypress from
// failing the test
        return false
    })

    it('Positive: find the item by name in google store', () => {
        cy.log("GIVEN User is at AccessoriesPage")
        AccessoriesPage.open()

        cy.log("When User perform search product by name")
        AccessoriesPage.performSearch('Google Pixel')

        SearchResultsPage.getProductByDocId("pixel_5")
            .should("exist")
    })
  })

