describe("Custom Commands", ()=>{

  it("Login Custom command", ()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    // cy.title().should("eq", "OrangeHRM")
    
    // cy.login('Admin', 'admin123')
    cy.clickLink('Recruitment')
    // cy.url().should('contain', 'recruitment/viewCandidates')
  })

})