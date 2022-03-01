describe('verify flipkart login feature', () => {
    it('user should be able to login', () => {
        cy.visit('https://www.flipkart.com/');
        cy.get('._1_3w1N').click();
        cy.get(':nth-child(1) > ._2IX_2-').click();
        cy.get(':nth-child(1) > ._2IX_2-').type('dsadsad');
        cy.get(':nth-child(2) > ._2IX_2-').type('ererewre');
        cy.get('._1D1L_j > ._2KpZ6l').click();

    })

})