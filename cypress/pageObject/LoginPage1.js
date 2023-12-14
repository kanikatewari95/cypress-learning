class login{

  setUserName(username){
    cy.get('input[name="username"]').click()
    cy.get('input[name="username"]').type(username)
  }

  setUserPassword(password){
    cy.get('input[name="password"]').click()
    cy.get('input[name="password"]').clear().type(password)
  }

  clickSubmit(){
    cy.get('button.orangehrm-login-button').click()
  }

  verifyLogin(){
    cy.get('h6[class*="oxd-topbar-header-breadcrumb-module"]').should('have.text', 'Dashboard')
  }
}

export default new login();

// or we can only "export default login" and then create it's object in .cy.js file and use it