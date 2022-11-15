/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

const name = faker.name.firstName();
const password = faker.internet.password();
const email = faker.internet.email(name);

function login() {
  cy.get("input#email").type(`${email}{enter}`);
  cy.get(
    ".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass"
  ).type(`Jo12.${password}{enter}`);
}

describe("criar conta", () => {
  before(() => {
    cy.visit("https://magento.softwaretestingboard.com/");
  });

  it("deve acessar criar uma nova conta", () => {
    cy.get(".panel > .header > :nth-child(3) > a").click();
    cy.get(".base").should("have.text", "Create New Customer Account");
  });

  it("deve criar um cadastro", () => {
    cy.get("input#firstname").type(`${faker.name.firstName()}{enter}`);
    cy.get("input#lastname").type(`${faker.name.lastName()}{enter}`);
    cy.get("input#is_subscribed").click();
    cy.get("input#email_address").type(`${email}{enter}`);
    cy.get("input#password").type(`Jo12.${password}{enter}`);
    cy.get("input#password-confirmation").type(`Jo12.${password}{enter}`);
    cy.get(".block-dashboard-info > .block-title > strong").should(
      "have.text",
      "Account Information"
    );
  });

  it("deve criar endereço", () => {
    cy.get(".box-billing-address > .box-actions > .action").click();
    login();
    cy.get("#company").type(`${faker.company.name()}{enter}`);
    cy.get("#telephone").type(`${faker.phone.number()}}{enter}`);
    cy.get("#street_1").type(`${faker.address.streetName()}{enter}`);
    cy.get("#city").type(`${faker.address.city()}{enter}`);
    cy.get("#country").select("BR").type("{enter}");
    cy.get("select#region_id").select("490");
    cy.get("#zip").type(`${faker.address.zipCode()}{enter}`);
    cy.get(".message-success > div").should(
      "have.text",
      "You saved the address."
    );
  });

  it("deve ir para my account", () => {
    cy.get(
      ":nth-child(2) > .customer-welcome > .customer-name > .action"
    ).click();
    cy.get(
      ":nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a"
    ).click();
    login();
    cy.get(".base").should("have.text", "My Account");
  });
});
