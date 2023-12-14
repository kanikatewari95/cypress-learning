describe("Forms", ()=>{
  it("practice", ()=>{
    cy.visit("https://fs2.formsite.com/meherpavan/form2/index.html?1537702596407")
    cy.get('input#firstName').click();
    cy.get('input#firstName').type('kanika')
    cy.get('input#firstName').should('have.value', 'kanika')
  })

  it.only("next", ()=>{
    cy.visit('https://testpages.eviltester.com/styled/basic-html-form-test.html')
    cy.get('input[name="username"]').click()
    cy.get('input[name="username"]').type('kan')
    cy.get('input[name="username"]').clear()
    cy.get('input[name="username"]').type('kanika')
    cy.get('input[name="username"]').should('have.value', 'kanika')
    cy.get('input[name="password"]').click()
    cy.get('input[name="password"]').type('kanika123')
    cy.get('input[name="password"]').should('have.value', 'kanika123')
    
    cy.get('input[type="file"]').selectFile('cypress/images/sample.png')

    cy.fixture('sample1.pdf').as('sampleFile')
    cy.get('input[type="file"]').selectFile('@sampleFile')

    cy.get('input[type="checkbox"]').first().click()
    cy.get('input[type="checkbox"]').first().should('be.checked')
    cy.get('input[type="checkbox"]').first().click()
    cy.get('input[type="checkbox"]').first().should('not.be.checked')
    cy.get('input[type="checkbox"]').eq(1).check()
    cy.get('input[type="checkbox"]').eq(1).should('be.checked')
    cy.get('input[type="checkbox"]').eq(1).uncheck()
    cy.get('input[type="checkbox"]').eq(1).should('not.be.checked')

    cy.get('input[type="radio"]').last().should('be.visible')
    cy.get('input[type="radio"]').last().click()
    cy.get('input[type="radio"]').last().should('be.checked')
    cy.get('input[type="radio"]').last().click()
    cy.get('input[type="radio"]').eq(1).should('not.be.checked')

    cy.get('[name="multipleselect[]"]').select('Selection Item 3')
    cy.get('[name="multipleselect[]"]').select(['Selection Item 2','Selection Item 4'])

    cy.get('select[name="dropdown"]').select(0)
    cy.get('select[name="dropdown"]').select('Drop Down Item 6').should('have.value', 'dd6')
    cy.get('select[name="dropdown"]').select('dd3')

    cy.get('input[name="submitbutton"][value="submit"]').click()
    cy.url().should('contain', 'the_form_processor', { timeout:10000 })
    cy.get('div.page-body h1').should('have.text', 'Processed Form Details', { timeout:10000 })
    cy.get('div.page-body h2').should('have.text', 'Submitted Values', { timeout:10000 }).and('be.visible')
    // cy.get('a[id="back_to_form"]').click()
    // cy.url().should('contain', 'basic-html-form-test', { timeout:10000 })

  })
})