import 'cypress-iframe'

describe("iframes", ()=>{
  it("test iframe", ()=>{
    cy.visit("https://the-internet.herokuapp.com/iframe")

    const iframe = cy.get('iframe[class*="edit-area__iframe"]').its('0.contentDocument.body').should('be.visible')
                    .then(cy.wrap)

    iframe.clear().type('Welcome {ctrl+a}')
    cy.get('button[aria-label="Bold"]').click()
  })

  it("test iframe using plugin", ()=>{
    cy.visit("https://the-internet.herokuapp.com/iframe")

    cy.frameLoaded('iframe[class*="edit-area__iframe"]') //load the frame

    cy.iframe('iframe[class*="edit-area__iframe"]').clear().type("Hello!!! {ctrl+a}")
    cy.get('button[aria-label="Bold"]').click()
    
  })

  it.only("test iframe using plugin", ()=>{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    cy.frameLoaded('#courses-iframe') //load the frame
    cy.iframe().find('a[href="mentorship"]').first().click();
    cy.wait(1000)
    cy.iframe().find('div[class="inner-box"] h1').should('have.text' , 'Mentorship')

    
    
  })
})