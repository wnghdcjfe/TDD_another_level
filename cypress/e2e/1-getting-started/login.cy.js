describe("Login Test", () => {
  it("should navigate to the login page and login successfully", () => {
    // Visit the login page
    cy.visit("http://localhost:3000/login");

    // Find the email input and type the email
    cy.get('input[name="email"]').type("test@example.com");

    // Find the password input and type the password
    cy.get('input[name="password"]').type("password123");

    // Find the login button and click it
    cy.get('button[type="submit"]').click();

    // Assert that a welcome message is displayed
    cy.contains("Welcome, test@example.com").should("be.visible");
  });

  it("should display an error message for empty email or password", () => {
    // Visit the login page
    cy.visit("http://localhost:3000/login");

    // Try to submit the form without entering email and password
    cy.get('button[type="submit"]').click();

    // Assert that an error message is displayed
    cy.contains("Login failed. Please provide both email and password.").should(
      "be.visible"
    );
  });
});
