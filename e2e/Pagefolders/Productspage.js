class Productspage
{
   getshoplink()
   {
      return cy.get("a[href='/angularpractice/shop']")  
   }
   getCheckout()
   {
      return cy.xpath("//a[contains(@class,'nav-link btn')]")
   }
  
}

export default Productspage;