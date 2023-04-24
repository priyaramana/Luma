///<reference types = "cypress"/>
import "cypress-xpath"

describe("Home Page",()=>{
    beforeEach("Launch the website",()=>{
        cy.visit('/');
    })
    describe("Panel Header",()=>{
        it("Verify all components in panel header is visible",()=>{
            //verify bkg color of section
            const panelheader = cy.xpath("//div[contains(@class,'panel header')]")
            panelheader.should('be.visible');
            panelheader.should('have.css', 'color', 'rgb(255, 255, 255)');
            //verify default welcome message
            cy.get('.not-logged-in').contains('Default welcome msg!').should('be.visible');
            //verify if sign in link is present
            const Signin = cy.get('a').contains('Sign In').should('be.visible');
            //verify if create account link is present
            const CreateanAccount = cy.get('a').contains('Create an Account').should('be.visible');
        })
        it('Verify the header content components',()=>{
            //verify Header content and bkg color
            const headercontent = cy.xpath("//div[contains(@class,'header content')]")
            headercontent.should('have.css','color','rgb(51, 51, 51)')
            //check if logo is present in header
            cy.xpath("//img[contains(@src,'US/images/logo.svg')]").should('be.visible');
            //check if search box is present
            cy.xpath("//input[contains(@placeholder,'Search entire store here...')]").should('be.visible')
            //check if cart icon is present
            cy.xpath("//a[contains(.,'My Cart')]").should('be.visible')
        })
        it('verify nav sections',()=>{
            //verify Whats new link is visible
            const Whatsnew = cy.get('a').contains("What's New").should('be.visible')
            Whatsnew.click()
            cy.url().should('eq',"https://magento.softwaretestingboard.com/what-is-new.html")
            //verify Women link is visible
            const Women = cy.get('a').contains("Women").should('be.visible')
            Women.click()
            cy.url().should('eq',"https://magento.softwaretestingboard.com/women.html")
            //verify Men link is visible
            const Men = cy.get('a').contains("Men").should('be.visible')
            Men.click()
            cy.url().should('eq',"https://magento.softwaretestingboard.com/men.html")
            //verify Gear link is visible
            const Gear = cy.get('a').contains("Gear").should('be.visible')
            Gear.click()
            cy.url().should('eq',"https://magento.softwaretestingboard.com/gear.html")
            //verify Training link is visible
            const Training = cy.get('a').contains("Training").should('be.visible')
            Training.click()
            cy.url().should('eq',"https://magento.softwaretestingboard.com/training.html")
            //verify Sale link is visible
            const Sale = cy.get('a').contains("Sale").should('be.visible')
            Sale.click()
            cy.url().should('eq',"https://magento.softwaretestingboard.com/sale.html")
        })
        it("click on dropdown in header",()=>{
            cy.get('#ui-id-4').contains('Women').trigger('mouseover')
            cy.get('#ui-id-9').contains('Tops').trigger('mouseover')
            cy.get('#ui-id-11').contains('Jackets').click();
            cy.url().should("eq",'https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html')
        })
    })
   
})