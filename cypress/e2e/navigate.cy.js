describe("Navigating between pages", () =>
{
  it("test case", () =>
  {
    cy.visit("https://demo.opencart.com/")
    cy.title().should("eq", "Your Store") //Home Page

    cy.get(':nth-child(7) > .nav-link').click()
    cy.get('div#content h2').should('have.text', 'Cameras') //camera page

    cy.go('back') //home page
    cy.title().should("eq", "Your Store")
    
    cy.go('forward') //camera page
    cy.get('div#content h2').should('have.text', 'Cameras')

    cy.go(-1) //navigate back (home page)
    cy.title().should("eq", "Your Store")
    
    cy.go(1) //navigate forward (camera page)
    cy.get('div#content h2').should('have.text', 'Cameras')

    cy.reload()
  })
})