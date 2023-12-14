describe("Dropdowns", ()=>{

  it("Dropdown with select tag", ()=>{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('select#dropdown-class-example').select(0) //with index
    cy.get('select#dropdown-class-example').select('Option3').should('have.value', 'option3') //text content
    cy.get('select#dropdown-class-example').select('option2') //value
    
  })

  it("Dropdown without select tag", ()=>{
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

    cy.get('span[id*="billing_country-container"]').click();
    cy.get('input[class*="search__field"]').click();
    cy.get('li[class*="results__option"]').should('contain', 'Mexico')
    //cy.get('input[class*="search__field"]').type('Mexico').type('{enter}')
    cy.get('input[class*="search__field"]').type('Mexico')
    cy.get('li[class*="results__option"]').contains('Mexico').click()
    cy.get('span[id*="billing_country-container"]').should('have.text', 'Mexico')
    
  })

})