class HomePage {
  getUserName(username) {
      cy.get('#reg_username').click();
      cy.get('#reg_username').type(username)
  }
  getEmail(email){
      cy.get('#reg_email').click();
      cy.get('#reg_email').type(email)
  }
  getPassword(password){
      cy.get('#reg_password').click();
      cy.get('#reg_password').type(password)
  }
  getLoginUserName(loginUsername){
      cy.get('#username').click();
      cy.get('#username').type(loginUsername)
  }
  getRegisterButton() {
      cy.get('.woocommerce-Button').click();
  }
  }
  export default HomePage