import { Login } from "../PageElements/loginPage";

describe("Swag Labs E-commerce", () => {
  it("Features Test", () => {
    const login = new Login();
    cy.visit("/");
    login.loginCredentials("error_user", "secret_sauce");
    login.loginSuccess();
  });
});
