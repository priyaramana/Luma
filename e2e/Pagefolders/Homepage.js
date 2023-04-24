class Homepage
{
   getname()
   {
    return cy.get('form input.form-control[name="name"]')
   }
   getentrepreneur()
   {
    return cy.get('#inlineRadio3')
   }
   getgender()
   {
    cy.get('select')
   }
}

export default Homepage;