import 'cypress-iframe'
import "cypress-file-upload"

describe("iframes", ()=>{

  it("test iframe using plugin", ()=>{
    //cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    //cy.visit(Cypress.env('url'))
    cy.visit('/')
    //cy.screenshot() 
    cy.frameLoaded('#courses-iframe') //load the frame
    cy.iframe().find('a[href="mentorship1"]').first().click();
    cy.wait(1000)
    cy.iframe().find('div[class="inner-box"] h1').should('have.text' , 'Mentorship')
 
  })

  it.only("File Upload in Shadow Dom", ()=>{
    cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")

    cy.get('input[class="smart-browse-input"]').attachFile('sample.png') // it is in shadow dom
    cy.wait(5000)
    cy.get('span[class="smart-item-name"]').contains('sample.png')
   
    // cy.get('smart-ui-file-upload').shadow().find('smart-file-upload').find('div[class="smart-container"]').find('div[class="smart-file-upload-footer"]').find('smart-button[class*="smart-upload-all-button"]').click()

    cy.get('smart-button[class*="smart-upload-all-button"]').click()
  })
})