import { Login } from "../PageElements/loginPage";

describe("Swag Labs E-commerce", () => {
  it("Unhappy Tests for Login Page", () => {
    const login = new Login();
    cy.visit("/");
    login.loginCredentials("username", "password");
    login.loginFailure();
  });
});
