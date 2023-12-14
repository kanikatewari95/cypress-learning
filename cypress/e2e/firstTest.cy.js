describe("my first test", () =>
{
  it("passed test case", () =>
  {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.title().should("eq", "OrangeHRM")
  })

  it("failed test case", () =>
  {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.title().should("eq", "OrangeHRM123")
  })
})