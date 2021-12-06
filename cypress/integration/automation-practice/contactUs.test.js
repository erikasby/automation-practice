/// <reference types="cypress" />

describe("Testing Contact us page", () => {
  it("Submit Contact us", () => {
    cy.visit("http://automationpractice.com/index.php");

    cy.contains("Contact us").click();

    cy.get("#id_contact").select("2");

    cy.get("#email").type("georgelucash1239870@gmail.com");

    cy.get("#message").type(
      "Hello, Automation Practice. I want to thank you for your gorgeous website which has no bugs whatsoever. Also I am glad you included a lot of functionality in here so i can test it."
    );

    cy.get(".alert-success").should("not.exist");

    cy.get("#submitMessage").click();

    cy.get(".alert-success").should("exist");
  });
});
