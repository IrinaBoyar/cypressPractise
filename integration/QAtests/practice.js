describe('Open Demo App and Perfrom actions', ()=>{
  
    it('Identify text field and enter value', ()=>{
     cy.visit('https://demoqa.com/text-box');
     cy.get('#userName').type('ira');
     cy.get('.mr-sm-2').first().clear().type('lalal');
     cy.get('input[placeholder="Full Name"]').type('KKKKK');
     cy.visit('https://demoqa.com/links');
     //cy.get('a[href="https://demoqa.com"]').click();
     cy.visit('https://demoqa.com/buttons');
     cy.get('#doubleClickBtn').dblclick();
     cy.get('#rightClickBtn').rightclick();

     cy.contains(/^Click Me$/).click();
     cy.visit('https://demoqa.com/radio-button');
     cy.get('#yesRadio').click({force: true});
     cy.get('[type="radio"]').first().parent().next().click();
    
     
    })

        

})
      