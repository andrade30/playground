describe('Input Fields', () => {

    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
    });

    it('Deve preencher o campo texto', () => {

        cy.get('nav a[href="/input-fields"]')
            .click()

        cy.contains('h2', 'Input Fields')
            .should('be.visible')

        cy.get('[data-cy="fullname"]')
            .type('Alessandro Andrade')

        cy.get('input[name="email"]')
            .type('andrade.sp27@gmail.com')

        cy.get('input[name="number"]')
            .type('2024')

        // cy.get('input[name="number]')
        //     .should('have.value', '')

        cy.get('input[name="date"]')
            .type('2024-12-01')
    });
});