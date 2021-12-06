/// <reference types="cypress" />

describe("Testing deletion of an element from My account", () => {
  it("Deleting an element", () => {
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

    cy.contains(" Faded Short Sleeve T-shirts ").click();

    cy.get("#wishlist_button").click();

    cy.get('[title="Close"]').click();

    cy.get(".account").click();

    cy.contains("My wishlists").click();

    cy.get(".icon-remove").click();

    cy.get(".icon-remove").should("not.exist");
  });
});
