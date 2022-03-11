describe('Cypress Locators in action', ()=>{
    beforeEach(()=>{
        cy.visit('http://automationpractice.com')
    })
   
   it('Interact with Elements using class selector',()=>{
         cy.get('.item')
         .eq(0) //0th element in the array of elements
         .click()
         cy.get('[class*="center_column"]') 
         .should('be.visible')
     })  
   it('Class selector short hand',()=>{
      //find class containing value .. using *=
      cy.get("a[class*='add_to_cart']")
      .eq(0)  // finding 0th element
      .click()
      .get("#layer_cart")
      .should('be.visible')
   
    //find class value that start with .. using ^=
     cy.get("[class^='layer_cart_product']")
     .should('be.visible')
     .get("a[title='Proceed to checkout']")
     .click()
  
    //find class that ends with... using $=
     cy.get('[class$="_delete"]')
     .click()
     .get('.alert')
     .should('be.visible')
  })
 })
 