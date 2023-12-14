class login{

  txtUsername = 'input[name="username"]'
  txtPassword = 'input[name="password"]'
  btnSubmit = 'button.orangehrm-login-button'
  labelMsz = 'h6[class*="oxd-topbar-header-breadcrumb-module"]'

  setUserName(username){
    cy.get(this.txtUsername).click()
    cy.get(this.txtUsername).type(username)
  }

  setUserPassword(password){
    cy.get(this.txtPassword).click()
    cy.get(this.txtPassword).clear().type(password)
  }

  clickSubmit(){
    cy.get(this.btnSubmit).click()
  }

  verifyLogin(){
    cy.get(this.labelMsz).should('have.text', 'Dashboard')
  }
}

export default login;