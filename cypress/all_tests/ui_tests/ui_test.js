/// <reference types="cypress" />
import SearchResultsPage from "../../page_objects/searchResultsPage";
import AccessoriesPage from "../../page_objects/accessoriesPage";

describe('UI test for google store', () => {
    before( () => {
        cy.fixture('product').then(data => {
            cy.wrap(data).as('productData')
        })
    })

    it('Positive: find the item by name in google store', () => {
        cy.get('@productData').then((productData) => {
            cy.log("GIVEN User is at AccessoriesPage")
            AccessoriesPage.open()

            cy.log("When User perform search product by name")
            AccessoriesPage.performSearch(productData.name)

            SearchResultsPage.getProductByDocId(productData.url)
                .should("exist")
        })
    })
  })
