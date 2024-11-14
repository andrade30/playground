describe('Textarea', () => {

    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/textarea', 'Textarea')
    });

    it('Deve preencher o campo de área de texto', () => {

        cy.get('textarea[name="message"]')
            .type("Boas vindas ao Cypress Skills. Um curso de formação completo para você aprender sobre automação de testes com o Cypress.")
    });
});