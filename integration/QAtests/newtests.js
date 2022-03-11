
describe('These are new tests', ()=>{

it('Accessing new elements', ()=>{

cy.visit('https://demoqa.com/');
cy.get('.avatar.mx-auto.white(2)').click();
cy.url().should('include','alertsWindows');
cy.contains('&')


})


})