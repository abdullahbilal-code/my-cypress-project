describe ("Appli Tools Plugin Intro", ()=>{

    beforeEach(() => {
        cy.eyesOpen({
            appName: OrangeHRM
        })
    })

    it('plugins', () => {
        
        cy.visit('/')
        cy.url().should('include', '/auth/login')
        cy.eyesCheckWindow()
    })


    afterEach(() => {
        
        cy.eyesClose()

    })


})