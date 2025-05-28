import { Login } from "../PageElements/loginPage";

describe("Swag Labs E-commerce", () => {
  it("Features Test", () => {
    const login = new Login();
    cy.visit("/");
    // cy.getSelector("username").should("be.visible");
    // cy.getSelector("password").should("be.visible");
    // cy.getSelector("login-button").should("be.visible");
    login.loginCredentials("error_user", "secret_sauce");
    login.loginSuccess();
  });
});
