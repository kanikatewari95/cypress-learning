module.exports = {
  projectId: '21svyv',

  //change the viewport
  viewportHeight: 800, //660
  viewportWidth: 1200, //1000


  // defaultCommandTimeout: 4000, 
  // pageLoadTimeout: 60000, 
  // responseTimeout: 5000	,

  //fixturesFolder: 'cypress/Testingg/fixtures',

  screenshotsFolder:'cypress/screenshots',
  videosFolder: 'cypress/videos',
  downloadsFolder: 'cypress/downloads',
  fixturesFolder: 'cypress/fixtures',
  
  // screenshotOnRunFailure: true,
  // video: true,
  // videoCompression: true,
  // trashAssetsBeforeRuns: true,
  // includeShadowDom: true,
  // retries: {
  //   runMode: 0,
  //   openMode: 1,
  // },
  // chromeWebSecurity: true,
  

  e2e: {
    //baseUrl: 'https://rahulshettyacademy.com/AutomationPractice',
    
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}',
    

    // "env":{
    //   //"url":'https://rahulshettyacademy.com/AutomationPractice/'
    // },

    setupNodeEvents(on, config) {
      // implement node event listeners here      
    },
  },
};
