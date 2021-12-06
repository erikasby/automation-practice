/// <reference types="cypress" />

// Should add products with and without discout
describe("Testing adding to cart", () => {
  it("Adding to cart while unauthenticated", () => {
    cy.visit("http://automationpractice.com/index.php");

    // Check if cart is empty
    cy.get(".products").should("not.exist");

    cy.get('[data-id-product="2"]:first').click();
    cy.get('[data-id-product="5"]:first').click();

    cy.get(".cross").click();
    cy.get(".cross").click();

    // Check if cart has 2 products
    cy.get(".products").should("exist");
  });

  it("Adding to cart while authenticated", () => {
    cy.visit("http://automationpractice.com/index.php");

    // Basic Sign In below
    cy.contains("Sign in").click();

    cy.get("#email").type("georgelucash1239870@gmail.com");
    cy.get("#passwd").type("Lemonjazz12");

    cy.get("#SubmitLogin").click();

    cy.url().should(
      "eq",
      "http://automationpractice.com/index.php?controller=my-account"
    );

    cy.visit("http://automationpractice.com/index.php");

    // Check if cart is empty
    cy.get(".products").should("not.exist");

    cy.get('[data-id-product="2"]:first').click();
    cy.get('[data-id-product="5"]:first').click();

    cy.get(".cross").click();
    cy.get(".cross").click();

    // Check if cart has 2 products
    cy.get(".products").should("exist");
  });
});
