describe("Multiple fixture data", ()=>{
  it("Fixture2", ()=>{

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.fixture("orangeHrm2.json").then((data)=>{
      
      data.forEach((userdata)=>{
        cy.get('input[name="username"]').click()
        cy.get('input[name="username"]').type(userdata.username)
        cy.get('input[name="password"]').click()
        cy.get('input[name="password"]').clear().type(userdata.password)
        cy.get('button.orangehrm-login-button').click()

        if(userdata.username=="Admin" && userdata.password=="admin123"){
          cy.get('h6[class*="oxd-topbar-header-breadcrumb-module"]').should('have.text', userdata.expected)

        }

        else{
          cy.get('p[class*="oxd-alert-content-text"]').should('have.text', userdata.expected)
        }
      })
    })
  })
})