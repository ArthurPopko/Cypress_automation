describe('UI test for google store', () => {
    it('Positive: Create user', () => {
      cy.visit('https://store.google.com/us/?hl=eng-US')
      cy.get('#kO001e > div.GSIJKe > div.lGXVoc > div > div > div.xZx5x.BWBuS > div').click()
      cy.get('#kO001e > div.GSIJKe > div.lGXVoc > div > c-wiz:nth-child(2) > div > div > div > div > input').type(`Google Pixel {enter}`)
      cy.get('a[href="/product/pixel_5"]').should("exist")
    })
})