describe('Cadastro de Usuario', () => {
    
    it('Cadastrar usuario', () => {
        cy.visit('https://beta.coodesh.com');
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('button[type="button"]').contains('Login').click()
        cy.get('div.text-center.m-auto > div > a').contains('Cadastre-se').click()
        cy.get('#displayName').type(cy.faker.name.firstName())
        cy.get('#email').type(cy.faker.internet.email())
        cy.get('#password').type('Gustavo123!')
        cy.get('[type="checkbox"]').check({force: true})
        cy.get('div > button').contains('Inscreva-se').click()
        cy.url().should('be.equal', 'https://beta.coodesh.com/onboarding/developer/profile')
    })
     
})