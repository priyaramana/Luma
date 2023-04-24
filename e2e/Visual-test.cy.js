///<reference types = "cypress"/>
import "@percy/cypress";
//import { cy, Cypress, expect, it } from "local-cypress";
describe("check all links on the page", () => {
  beforeEach(() => {
    cy.viewport(375, 667);
    cy.visit("https://baltimorebanner-the-baltimore-banner-sandbox.web.arc-cdn.net/94a2e0dbbcfc490z/", {failOnStatusCode: false});
  });

  it("before clicking on caret icon", () => {
    //click on hamburger menu icon
   cy.get('.nav-components--mobile > .nav-widget > .nav-widget__hamburguer-menu-icon').click();
   cy.percySnapshot('before clicking on caret icon'); 
  });
  it("after clicking on caret icon", () => {
    //click on hamburger menu icon
   cy.get('.nav-components--mobile > .nav-widget > .nav-widget__hamburguer-menu-icon').click();
   //cy.percySnapshot('before clicking on caret icon');
   //click on one of the header menu link
   cy.get(':nth-child(5) > .subsection-anchor ').click();
   cy.percySnapshot('after clicking on caret icon');
   //verify if caret icon is visible
   cy.get(".submenu-caret").should('be.visible');
   
  });
 
});

/*describe("Check visual testing",()=>{
    it("to compare images",()=>{
        
        cy.visit("https://www.google.com");
        cy.percySnapshot();
        //cy.get('[value="Google Search"]').hideElement();
        //cy.compareSnapshot("home-page");
        
        
    })
})*/