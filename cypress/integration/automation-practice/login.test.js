/// <reference types="cypress" />

describe("Testing Authorization", () => {
  it("Log in valid user", () => {
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
  });
});
