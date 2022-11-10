/// <reference types="cypress" />

describe("criar conta", () => {
  before(() => {
    cy.visit("https://magento.softwaretestingboard.com/");
  });

  it("acessar criar a conta", () => {
    cy.get(".panel > .header > :nth-child(3) > a").click();
    cy.get(".base").should("have.text", "Create New Customer Account");
  });

  it("criar um cadastro", () => {
    cy.get("input#firstname").type("joao{enter}");
    cy.get("input#lastname").type("Silva{enter}");
    cy.get("input#email_address").type("010102@email.com{enter}");
    cy.get("input#password").type("Silvajoao01{enter}");
    cy.get("input#password-confirmation").type("Silvajoao01{enter}");
  });
});

//  const name = faker.name.firstName();
// const name = faker.name.lastName();
//const email = faker.internet.email(name);
//const password = faker.password.password();
