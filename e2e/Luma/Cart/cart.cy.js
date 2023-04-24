///<reference types = "cypress"/>
import "cypress-xpath"
//import example from '../fixtures/example.json'
import Homepage from "../../Pagefolders/Homepage";
import Productspage from "../../Pagefolders/Productspage";

describe("Cart Page",()=>{ 
   const homepage = new Homepage() 
   const productpage = new Productspage()
        let data; //closure variable
        beforeEach(() => {
           cy.visit("https://rahulshettyacademy.com/angularpractice");
           cy.fixture('example').then((fdata)=>{
            data = fdata
            
           })
           
        })
        it("Launch the url",()=>{
         //const homepage = new Homepage()
            //click on one of the product page link in the header
           homepage.getname().type(data.Name)//usage of closure variable to get the values from the fixtures
           cy.get('select').select(data.Gender)//usage of closure variable to get the values from the fixtures
           
        })
       
        it("verify the min length for name field",()=>{
         const name = cy.get('form input.form-control[name="name"]')
         name.type(data.Name)
         name.should('have.attr','minlength',2)
        })
        it("verify if entrepreneur radio button is in disabled mode",()=>{
         const homepage = new Homepage()
         homepage.getentrepreneur().should('be.disabled')
        })
        it.only('product page & cart page',()=>{
         
         productpage.getshoplink().click();
         cy.url().should('eq','https://rahulshettyacademy.com/angularpractice/shop')
         
         data.Productname
         data.Productname.forEach(element => {
            cy.Selectproduct(element)
         });
         productpage.getCheckout().click()
         cy.contains('Checkout ').click()
         cy.get("#country").type("india")
         cy.wait(6000)
         cy.get('.suggestions > ul > li > a').click()
         cy.get("#checkbox2").click({force: true})
         cy.get('input[type="submit"]').click()
         cy.get('.alert').then(function(element){
           const actualtext = element.text()
           expect(actualtext.includes("success")).to.be.true
         })
        })
        
   
})