      
describe('Cypress Locators in action', ()=>{
   beforeEach(()=>{
       cy.visit('http://automationpractice.com')
   })
it('Interact with Elements using name attribute',()=>{
   cy.get('input[name="search_query"]') //observe how we use name attribute
   .type('Tshirt{enter}')
   .get('#center_column')
   .should('be.visible')
})
})
