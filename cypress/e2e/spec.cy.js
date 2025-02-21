

describe('OrangeHRM Login and Logout Test', () => {
    
    beforeEach(() => {

      // Suppress application errors
      Cypress.on('uncaught:exception', (err, runnable) => {

        return false; 
       // Prevent tests from failing due to uncaught exceptions

      });
    });

    it.skip('Logs in and out successfully', ()=>{
        cy.visit('/')

        cy.contains("h5","Login")
        //Getting ElementBy Class Using '.' Prefix 
        cy.get('.oxd-text.oxd-text--p', { timeout: 10000 }) // Wait for 10 seconds
        .eq(0)
        //.should('be.visible').contains('admin')        

        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()
    
        cy.get(".oxd-userdropdown-tab").click()
        cy.get('.oxd-userdropdown-link') // Refine selector for the logout link
          .contains('Logout') // Use text match to ensure the right button
          .click();
    
          
        cy.url().should('include', '/auth/login');

        

        // /* ==== Generated with Cypress Studio ==== */
        // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear();
        // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
        // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear();
        // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
        // cy.get('.oxd-button').click();
        /* ==== End Cypress Studio ==== */
    });
    it.skip('LogIn through Xpath ', ()=>{
      cy.visit('/')
      cy.xpath("//input[@placeholder='Username']").type('Admin')
      cy.xpath("//input[@placeholder='Password']").type('admin123')
      cy.xpath("//button[normalize-space()='Login']").click()

      cy.xpath("//span[@class='oxd-userdropdown-tab']").click()
      cy.xpath("//a[normalize-space()='Logout']").click()

      //Verify the Logout Event
      cy.url().should('include', '/auth/login');

    })

    it.skip('Cypress Assertions on Login Page',()=>{
      cy.visit('/')
      cy.url().should('include', '/auth/login') 
      cy.get("input[placeholder='Username']").type('Admin')
      cy.get("input[placeholder='Password']" ).focus().type('admin123')
      cy.get("button[type='submit']")//.should('be.visible')
        .should('have.length.at.least',1).click()

    
    })
    it("Chaining and Retrying",{defaultCommandTimeout: 6000}, ()=>{
      cy.visit('/')

      //First LogIn to Orange HRM
      cy.url().should('include', '/auth/login') 
      
      cy.get("input[placeholder='Username']").type('Admin')
      cy.get("input[placeholder='Password']" ).type('admin123')
      cy.get("button[type='submit']").click()

      cy.get('.orangehrm-attendance-card-bar').should('not.have.text','4h 38m Today')

      cy.get('.oxd-icon.bi-list.oxd-topbar-header-hamburger').click()
      cy.get("aside[class='oxd-sidepanel toggled'] li:nth-child(5)").click()
      cy.get("div:nth-of-type(3) > div:nth-of-type(3) > div:nth-of-type(2)");

    })


})