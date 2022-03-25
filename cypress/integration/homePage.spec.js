describe('Home page', () => {
    
    it('Home page', () => {
        const urlhome = 'https://beta.coodesh.com/'
        cy.visit(urlhome)
        cy.get('#onetrust-accept-btn-handler').click()
        cy.url().should('be.equal', urlhome)
    }) 

    it('Navegar login', () => {
        const urllogin = 'https://beta.coodesh.com/auth/signin/candidates'
        cy.visit(urllogin)
        cy.get('#onetrust-accept-btn-handler').click()
        cy.url().should('be.equal', urllogin)
    }) 

})
