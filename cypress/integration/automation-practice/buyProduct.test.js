/// <reference types="cypress" />

describe("Testing buying product functionality", () => {
  it("Buying a product", () => {
    cy.visit("http://automationpractice.com/index.php");

    cy.get('[data-id-product="2"]:first').click();

    cy.contains(" Proceed to checkout").click();

    cy.get(".standard-checkout").click();

    cy.get("#email").type("georgelucash1239870@gmail.com");
    cy.get("#passwd").type("Lemonjazz12");

    cy.get("#SubmitLogin").click();

    cy.get("[name='processAddress']").click();

    cy.get(".checker").click();

    cy.get("[name='processCarrier']").click();

    cy.get(".bankwire").click();

    // Pick span which contains specific text
    cy.get("span").contains("I confirm my order").click();

    cy.contains("Your order on My Store is complete.").should("exist");
  });
});
