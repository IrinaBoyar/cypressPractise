describe('Cypress Locators in action', ()=>{
  
    it('Interact with Elements using ID selector', ()=>{
        cy.visit('http://automationpractice.com');
        cy.get('#search_query_top') //ids are identified using # prefix
        .type('Dress')
        .type('{enter}')
        .get('#center_column')
        .should('be.visible')
    })
 })
 