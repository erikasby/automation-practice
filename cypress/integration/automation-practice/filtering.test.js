/// <reference types="cypress" />

describe("Testing filtering women category by price, color, size", () => {
  it("Filtering by price, color, size", () => {
    cy.visit("http://automationpractice.com/index.php");

    cy.get('[title="Women"]:first').click();

    cy.url().should(
      "eq",
      "http://automationpractice.com/index.php?id_category=3&controller=category"
    );

    cy.get("#layered_id_attribute_group_1")
      .parent(".checked")
      .should("not.exist");
    // Sort by size S
    cy.get("#layered_id_attribute_group_1").click();
    // Check if clicked
    cy.get("#layered_id_attribute_group_1").parent(".checked").should("exist");

    // Sort by color Black
    // Can't check if color was picked, something wrong with GET request and website in general
    cy.get("#layered_id_attribute_group_11").click();

    // Sort by Lower price
    cy.get("#selectProductSort").select("price:asc");
    // Check if selected
    cy.get("#selectProductSort").parent("div").contains("Price: Lowest first");
  });
});
