/// <reference types="Cypress" />

describe("Selecting Locators", () =>
{
  it.only("test case", () =>
  {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.title().should("eq", "OrangeHRM")
    cy.title().its('length').should('be.gt', 1)

    cy.get('input[name="username"]').click()
    cy.get('input[name="username"]').type("Admin")
    cy.get('input[name="username"]').should('have.value', 'Admin')

    cy.get('input[name="username"]').invoke('val', 'asdf').should('not.eq', 'Admin')
    cy.get('input[name="username"]').invoke('attr', 'class').should('contain', 'oxd-input')

    cy.get('input[name="password"]').click()
    cy.get('input[name="password"]').clear().type("admin123")
    cy.get('button.orangehrm-login-button').click()
    cy.url().should('contain', 'dashboard')
    cy.get('a[href*="/viewAdminModule"]').click()
    cy.url().should('contain', 'admin')
    
    cy.get('a[href*="/viewMyDetails"]').click()
    cy.url().should('contain', 'viewPersonalDetails/empNumber')
    cy.get('label').contains('Female').should('be.visible')

  })

  it("implicit assertion", ()=>{
    cy.visit("https://example.cypress.io/")
    cy.contains('get').click()
    cy.get('#query-btn').should('be.visible').and('contain', 'Button').and('have.class', 'query-btn')
      .and('be.enabled').and('not.be.disabled')
  })

  it("dropdown with select tag", ()=>{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('select#dropdown-class-example').select(0) //with index
    cy.get('select#dropdown-class-example').select('Option2').should('have.value', 'option2') //text content
    cy.get('select#dropdown-class-example').select('option3') //value
    
  })

  it("checkbox and radio button", ()=>{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    // cy.get('[type="radio"]').first().check()
    // cy.get('[type="radio"]').first().should('be.visible')
    // cy.get('[type="radio"]').first().should('be.enabled')
    // cy.get('[type="radio"]').first().click()
    // cy.get('[type="radio"]').first().should('be.checked')
    // cy.get('[type="radio"]').last().should('not.be.checked')
    // cy.get('[type="radio"]').eq(1).should('not.be.checked')

    cy.get('[type="checkbox"]').eq(2).click()
    cy.get('[type="checkbox"]').eq(2).check()
    cy.get('[type="checkbox"]').eq(2).should('be.checked')
    // cy.get('[type="checkbox"]').eq(2).uncheck()
    // cy.get('[type="checkbox"]').eq(2).should('not.be.checked')

  //   cy.get('button[id="mousehover"]').then(element=>{

  //     const t = element.text()
  //     expect(t).to.contains('Mouse Hover')
  //     expect(t).not.to.contains('Mouse Hover12')
  //   })
  cy.get(':nth-child(7) > fieldset > legend').scrollIntoView()
  //cy.wait(3000)
  cy.scrollTo('top')
  cy.wait(0)
   cy.get('[type="checkbox"]').eq(2).scrollTo(0,0, { ensureScrollable: false })
   //cy.get('[type="checkbox"]').eq(2).scrollIntoView()
  // cy.get('button[id="mousehover"]').rightclick('topRight', {force:true})
  
  //cy.get('button[id="mousehover"]').trigger('mouseover')
  //cy.get('div[class="mouse-hover-content"]').should('be.visible')
  })

})