///<reference types = "cypress"/>
import "cypress-xpath"
import "cypress-iframe"

describe("Baltimore",()=>{
    it("home page",()=>{
        cy.visit("https://www.thebaltimorebanner.com/")
        //cy.wait(10000)
        cy.frameLoaded('#offer-0-nuL59')
        //cy.get('#offer-0-nuL59')
    })
})