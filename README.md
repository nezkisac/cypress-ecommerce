# E-Commerce Customer Registration & Basket Management Test Automation

## Overview

This project contains automated test scripts for an e-commerce application, focusing on customer registration and basket management functionalities. The tests are implemented using Cypress, following best practices for maintainability, reusability, and effective test data management.

## Project Structure

```plaintext
.
├── cypress
│   ├── e2e
│   │   ├── registration.spec.js    # Tests for customer registration
│   │   ├── basket.spec.js          # Tests for basket management
│   │   ├── login.spec.js           # Tests for login functionality
│   ├── fixtures
│   │   └── userData.json           # Sample test data
│   ├── pageObjects
│   │   ├── BasketPage.js           # Page Object for Basket page
│   │   ├── LoginPage.js            # Page Object for Login page
│   │   ├── RegisterPage.js         # Page Object for Registration page
│   ├── support
│   │   ├── commands.js             # Custom Cypress commands
│   │   ├── e2e.js                  # Support file for global configurations and imports
├── cypress.config.js               # Cypress configuration file
├── package.json                    # Project dependencies and scripts
└── README.md                       # Project documentation

**Setup Instructions**
*Prerequisites*
-Node.js and npm (Node Package Manager)
-Git
-A GitHub account

**Running the Tests**
*Running Tests Locally*
You can run the Cypress tests in interactive mode or headless mode.

-Interactive Mode:  npx cypress open
This command opens the Cypress Test Runner, where you can select and run individual test files.

-Headless Mode:  npx cypress run
This command runs all tests in headless mode, which is useful for CI/CD pipelines.

-Running Specific Tests
To run a specific test file, you can specify the path to the test file:  npx cypress run --spec "cypress/e2e/registration.spec.js"

Custom Commands
This project includes custom Cypress commands to simplify test scripts and improve reusability. Custom commands are defined in the cypress/support/commands.js file.

Test Data Management
Test data is managed using JSON fixtures and factory methods for generating dynamic data. Fixtures are stored in the cypress/fixtures directory.

Continuous Integration
To integrate with CI/CD pipelines, you can use tools like GitHub Actions, Jenkins, or GitLab CI. Below is an example configuration for GitHub Actions.

Conclusion
This project demonstrates a robust and maintainable approach to test automation using Cypress. By following best practices in test data management, custom commands, and the Page Object Model, this framework is designed to be scalable and easy to maintain.

For any questions or issues, feel free to reach out to the project maintainers.
