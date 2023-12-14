describe("Testing async", () =>
{
  it("test case", () =>
  {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.title().should("eq", "OrangeHRM")

    cy.get('input[name="username"]').click()
    cy.get('input[name="username"]').type("Admin")
    cy.get('input[name="username"]').should('have.value', 'Admin')
    cy.get('input[name="password"]').click().then(()=>{
      console.log("hello")
    })
    //console.log("hello")
    //cy.log("hello")
    cy.get('input[name="password"]').clear().type("admin123")
    cy.get('button.orangehrm-login-button').click()
    //console.log("dillo")

  })

})