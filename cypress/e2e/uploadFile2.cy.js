// using selectFile Method

describe("File Uploads", ()=>{

  it("Single file upload not Using Fixture", ()=>{
    cy.visit("https://the-internet.herokuapp.com/upload")

    cy.get('input#file-upload').selectFile('cypress/images/sample.png')
    cy.get('input#file-submit').click()
    cy.get('div[class="example"] h3').should('have.text', 'File Uploaded!', { timeout:20000 })

  })

  it("Single file upload Using Fixture", ()=>{
    cy.visit("https://the-internet.herokuapp.com/upload")

    cy.fixture('sample1.pdf').as('sampleFile')
    cy.get('input#file-upload').selectFile('@sampleFile')
    cy.get('input#file-submit').click()
    cy.get('div[class="example"] h3', {timeout:5000 }).should('have.text', 'File Uploaded!')

  })


  it.skip("Drag and Drop a file", ()=>{
    cy.visit("https://the-internet.herokuapp.com/upload")
    cy.fixture('sample1.pdf').as('sampleFile')
    cy.get('div#drag-drop-upload').last().selectFile('orangeHrm.json', { action: 'drag-drop' });
    cy.get('#drag-drop-upload  div[class*="filename"] > span').contains('orangeHrm.json')
  })

  // it("Uploading multiple files", ()=>{
  //   cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
  //   cy.get('input#filesToUpload').selectFile(['orangeHrm.json', 'sample.png', 'sample1.pdf'])
  //   cy.wait(5000)
  //   cy.get(':nth-child(6) > strong').should('contain.text', 'Files You Selected:')

  // })

})