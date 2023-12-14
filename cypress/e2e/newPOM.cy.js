import HomePage from "../pageObject/homePage";

describe("New POM test", ()=>{
  it("New Test", ()=>{
    cy.visit("https://shop.demoqa.com/my-account/")

    const homePage = new HomePage()

    homePage.getUserName('kanika')
    homePage.getEmail('kanika123@gmail.com')
    homePage.getPassword('Ashish!@123')
    homePage.getRegisterButton()

  })
})