export class Login {
  //   setUsername(username) {
  //     cy.getSelector("username").should("be.visible");
  //     cy.getSelector("username").type(username);
  //   }
  //   setPassword(password) {
  //     cy.getSelector("password").should("be.visible");
  //     cy.getSelector("password").type(password);
  //   }
  //   loginButton() {
  //     cy.getSelector("login-button").should("be.visible");
  //     cy.getSelector("login-button").click();
  //   }

  loginCredentials(username, password) {
    cy.getSelector("username").should("be.visible").type(username);
    cy.getSelector("password").should("be.visible").type(password);
    cy.getSelector("login-button").should("be.visible").click();
  }

  loginSuccess() {
    cy.get(".error-message-container").should("not.exist");
    cy.get(".header_label").within(() => {
      cy.get(".app_logo").contains(/Swag Labs/i);
    });
  }

  loginFailure() {
    cy.get(".error-message-container").within(() => {
      cy.get("h3").contains(
        /Epic sadface: Username and password do not match any user in this service/i
      );
    });
    cy.get(".header_label").should("not.exist");
  }
}

// Epic sadface: Username and password do not match any user in this service
