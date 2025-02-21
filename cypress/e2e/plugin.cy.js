describe ("Appli Tools Plugin Intro", ()=>{

    beforeEach(() => {
        cy.eyesOpen({
            appName: "OrangeHRM",
            testName: "Login Page Visual test"

        })
    })

    it('plugins', () => {
        
        cy.visit('/')
        cy.url().should('include', '/auth/login');

        // Add a descriptive name for the checkpoint
        cy.eyesCheckWindow({
            tag: "Login Page",
            target: "window",
            fully: true,

        }
        )
    })
    it ("Fail Tests", ()=>{
        cy.visit('/')
        expect(true).to.be.false 
    })


    afterEach(() => {
        
        cy.eyesClose()

    })


})