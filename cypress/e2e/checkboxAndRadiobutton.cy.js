describe(" Checkboxes and radio Buttons", ()=>{
  it("checkbox and radio button", ()=>{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('[type="radio"]').first().should('be.visible')
    cy.get('[type="radio"]').first().should('be.enabled')
    cy.get('[type="radio"]').first().check()
    cy.get('[type="radio"]').first().should('be.checked')
    cy.get('[type="radio"]').last().should('not.be.checked')
    cy.get('[type="radio"]').eq(1).should('not.be.checked')

    cy.get('[type="checkbox"]').eq(2).click()
    cy.get('[type="checkbox"]').eq(2).should('be.checked')
    cy.get('[type="checkbox"]').eq(2).uncheck()
    cy.get('[type="checkbox"]').eq(2).should('not.be.checked')

    cy.get('button[id="mousehover"]').then(element=>{

      const t = element.text()
      expect(t).to.contains('Mouse Hover')
      expect(t).not.to.contains('Mouse Hover12')

    })
  })
})