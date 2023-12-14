import "cypress-file-upload"
// using attachFile Method
describe("File Uploads", ()=>{

  it("Single file upload", ()=>{
    cy.visit("https://the-internet.herokuapp.com/upload")
    cy.get('input#file-upload').attachFile('sample1.pdf')
    cy.get('input#file-submit').click()
    //cy.wait(5000)
    cy.get('div[class="example"] h3').should('have.text', 'File Uploaded!', { timeout:20000 })

  })

  it("Rename the uploaded file", ()=>{
    cy.visit("https://the-internet.herokuapp.com/upload")
    cy.get('input#file-upload').attachFile({filePath:'sample1.pdf', fileName:'myfile.pdf'})
    cy.get('input#file-submit').click()
    cy.wait(5000)
    cy.get('div[class="example"] h3').should('have.text', 'File Uploaded!')

  })

  it("Drag and Drop a file", ()=>{
    cy.visit("https://the-internet.herokuapp.com/upload")
    cy.get('div#drag-drop-upload').last().attachFile('orangeHrm.json', { subjectType: 'drag-n-drop' });
    cy.get('#drag-drop-upload  div[class*="filename"] > span').contains('orangeHrm.json')

  })

  it("Uploading multiple files", ()=>{
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
    cy.get('input#filesToUpload').attachFile(['orangeHrm.json', 'sample.png', 'sample1.pdf'])
    cy.wait(5000)
    cy.get(':nth-child(6) > strong').should('contain.text', 'Files You Selected:')

  })

  it("File Upload in Shadow Dom", ()=>{
    cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")

    cy.get('input[class="smart-browse-input"]', {includeShadowDom:true}).attachFile('sample.png')
    cy.wait(5000)
    cy.get('span[class="smart-item-name"]', { includeShadowDom:true }).contains('sample.png')
   
    // cy.get('smart-ui-file-upload').shadow().find('smart-file-upload').find('div[class="smart-container"]').find('div[class="smart-file-upload-footer"]').find('smart-button[class*="smart-upload-all-button"]').click()

    cy.get('smart-button[class*="smart-upload-all-button"]', {includeShadowDom:true}).click()
  })
})