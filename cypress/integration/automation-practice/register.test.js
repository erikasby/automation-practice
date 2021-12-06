/// <reference types="cypress" />

describe("Testing Registration", () => {
  it("Register a valid user", () => {
    cy.visit("http://automationpractice.com/index.php");

    // Basic Sign In below
    cy.contains("Sign in").click();

    cy.get("#email_create").type("georgelucash1239870_5@gmail.com");

    cy.get("#SubmitCreate").click();

    // Fill the form
    cy.get("#id_gender1").click();
    cy.get("#customer_firstname").type("George");
    cy.get("#customer_lastname").type("Lucash");
    cy.get("#passwd").type("Lemonjazz12");
    cy.get("#days").select("3");
    cy.get("#months").select("4");
    cy.get("#years").select("1984");

    cy.get("#newsletter").click();

    cy.get("#firstname").type("George");
    cy.get("#lastname").type("Lucash");

    cy.get("#address1").type("Nokia St. 32");

    cy.get("#city").type("Springfield");
    cy.get("#postcode").type("45127");
    cy.get("#id_country").select("United States");
    cy.get("#id_state").select("Alaska");

    cy.get("#other").type("I love Kentucky Fried Chicken.");

    cy.get("#phone_mobile").type("+556 147 899 22");

    cy.get("#alias").type("Nokia St. 32");

    cy.get("#submitAccount").click();

    // If Register was successful, then URL should appear
    cy.url().should(
      "eq",
      "http://automationpractice.com/index.php?controller=my-account"
    );
  });

  it("Register invalid user", () => {
    cy.visit("http://automationpractice.com/index.php");

    // Basic Sign In below
    cy.contains("Sign in").click();

    cy.get("#email_create").type("robinmclaren@bobo.com");

    cy.get("#SubmitCreate").click();

    // Fill the form
    cy.get("#id_gender1").click();
    cy.get("#customer_firstname").type("123");
    cy.get("#customer_lastname").type("322");
    cy.get("#passwd").type("Lemonjazz12");
    cy.get("#days").select("3");
    cy.get("#months").select("4");
    cy.get("#years").select("1984");

    cy.get("#newsletter").click();

    cy.get("#firstname").type("1");
    cy.get("#lastname").type("Lucas14h");

    cy.get("#address1").type("Nokia St. 32");

    cy.get("#city").type("Springfield");
    cy.get("#postcode").type("45127");
    cy.get("#id_country").select("United States");
    cy.get("#id_state").select("Alaska");

    cy.get("#other").type("I love Kentucky Fried Chicken.");

    cy.get("#phone_mobile").type("+556 147 899 22");

    cy.get("#alias").type("Nokia St. 32");

    cy.get(".alert-danger").should("not.exist");

    cy.get("#submitAccount").click();

    // If Register was successful, then Alert should appear
    cy.get(".alert-danger").should("exist");
  });
});
