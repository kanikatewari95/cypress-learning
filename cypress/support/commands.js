// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress"/>

//const cypress = require("cypress");

//custom command for login into OrganeHrm
Cypress.Commands.add("login", (username,password)=>{
  cy.get('input[name="username"]').click()
  cy.get('input[name="username"]').type(username)
  cy.get('input[name="password"]').click()
  cy.get('input[name="password"]').clear()
  cy.get('input[name="password"]').type(password, { sensitive: true })
  cy.get('button.orangehrm-login-button').click()
  cy.get('.oxd-brand-banner > img').should('be.visible')
})

//custom commands for clicking on a link using label
Cypress.Commands.add("clickLink", (label)=>{
  cy.get('a').contains(label).click();
}) 

// // custom overwrite command (visit command)
//  Cypress.Commands.overwrite("visit", (existingVisitCommmand, visiturl, options)=>{
//    existingVisitCommmand(visiturl, options)
//    cy.login('Admin', 'admin123')
//  })

//  // custom overwrite command (click command)
//  Cypress.Commands.overwrite("click", (existingClickCommmand, subject, positionOrX, y, options = {})=>{
//   cy.log('before custom click')
//   existingClickCommmand(subject)
//   cy.log('after custom click')
// })

// // custom overwrite command (type command)
// Cypress.Commands.overwrite("type", (existingTypeCommmand, subject, text, options)=>{
//   if (options && options.sensitive) {
//     // turn off original log
//     options.log = false
//     // create new log with masked message
//     Cypress.log({
//       $el: subject,
//       name: 'type',
//       message: '*'.repeat(text.length),
//     })
//   }
//   return existingTypeCommmand(subject,text,options)
  
// })

