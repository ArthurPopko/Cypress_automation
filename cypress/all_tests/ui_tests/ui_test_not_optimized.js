describe('UI test for google store', () => {
    it('Positive: find the item by name in google store', () => {
      cy.visit('https://store.google.com/us/?hl=eng-US')
      cy.get(cy.get('.xZx5x').click())
      cy.get('.MsT9Jc').type(`Google Pixel {enter}`)
      cy.get('a[href="/product/pixel_5"]').should("exist")
    })
})