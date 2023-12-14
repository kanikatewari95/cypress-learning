/// <reference types="Cypress"/>

describe("Accessing fixture", ()=>{

// Direct fixture data access  
  it.only("Fixture direct access", ()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    cy.fixture("orangeHrmm.json").then((data)=>{
      cy.get('input[name="username"]').click()
      cy.get('input[name="username"]').type(data.username)
      cy.get('input[name="username"]').should('have.value', 'Admin')
      cy.get('input[name="password"]').click()
      cy.get('input[name="password"]').clear().type(data.password)
      cy.get('button.orangehrm-login-button').click()
      cy.get('h6[class*="oxd-topbar-header-breadcrumb-module"]').should('have.text', data.expected)
    })
  })




  

  

// Access fixture data through hooks

// let userdata;
//   before(()=>{
//     cy.fixture("orangeHrm.json").then((data)=>{
//       userdata = data;
//     })
//   })

  // it("Fixture using Hooks", ()=>{
  //   cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

  //   cy.get('input[placeholder="Username"]').click()
  //   cy.get('input[placeholder="Username"]').type(userdata.username)
  //   cy.get('input[placeholder="Username"]').should('have.value', 'Admin')
  //   cy.get('input[name="password"]').click()
  //   cy.get('input[name="password"]').clear().type(userdata.password)
  //   cy.get('button.orangehrm-login-button').click()
  //   cy.get('h6[class*="oxd-topbar-header-breadcrumb-module"]').should('have.text', userdata.expected)
  //   })

})