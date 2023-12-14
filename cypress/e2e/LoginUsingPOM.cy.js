import login from "../pageObject/LoginPage1.js"

describe("POM Testing", ()=>{
  it("Using POM without fixture", ()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    const ln =new login()
    ln.setUserName('Admin')
    ln.setUserPassword('admin123')
    ln.clickSubmit()
    ln.verifyLogin()
  })
  it.only("Using POM without fixture", ()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    //const ln =new login()
    login.setUserName('Admin')
    login.setUserPassword('admin123')
    login.clickSubmit()
    login.verifyLogin()
  })

  it("Using POM with fixture", ()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    cy.fixture("orangeHrm.json").then((data)=>{
      const ln =new login()
      ln.setUserName(data.username)
      ln.setUserPassword(data.password)
      ln.clickSubmit()
      ln.verifyLogin()
    })
    
  })
})