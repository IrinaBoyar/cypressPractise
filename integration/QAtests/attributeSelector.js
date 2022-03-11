describe('Cypress Locators in action', ()=>{
    beforeEach(()=>{
        cy.visit('http://automationpractice.com')
    })
   
    it('Finding elements using attribute values',()=>{
     cy.get('a[title*="store"]')
      .should('have.length.at.most',1)
   
     cy.get('a[title*="store" i]')  //case insensitive
      .should('have.length.gt',1)
        .each(i=> console.table([i.attr('href')]))
 })
  
 })
 