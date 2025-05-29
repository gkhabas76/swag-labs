## Sauce Demo E2E Testing

This project focuses on End-to-End (E2E) testing of the Sauce Demo web application. The goal is to ensure the application's critical user flows function correctly from a user's perspective, covering various scenarios and interactions.

## Table of Contents

- [Sauce Demo E2E Testing](#sauce-demo-e2e-testing)
- [Table of Contents](#table-of-contents)
- [Project Overview](#project-overview)
- [Features](#features)
- [Technology Used](#technology-used)
- [Setup and Installation](#setup-and-installation)

## Project Overview

The Sauce Demo application is a mock e-commerce site, perfect for testing. Our E2E tests will validate its core functions, including:

1. User login (with both correct and incorrect credentials)
2. Filtering products
3. Adding and removing items from the shopping cart
4. The entire checkout process
5. Order confirmation

By automating these tests, we can quickly spot any issues or "regressions" and ensure the Sauce Demo application stays stable and reliable.

## Features

- **Comprehensive Test Coverage:**

  Covers key user flows and scenarios.

- **Robust Test Automation:**

  Utilizes a reliable E2E testing framework.

- **Clear Reporting:**

  Generates human-readable test reports for easy analysis.

- **Maintainable Codebase:**

  Organized and modular test scripts.

- **Cross-Browser Compatibility:**

  Tests can be configured to run across different browsers.

## Technology Used

- Test Framework
  - **Cypress**
- **JavaScript**
- **Node.js**
- **npm**

## Setup and Installation

1. **Install Node.js on your Machine:**

   - Make sure you have Node.js installed. If not, you can download from https://nodejs.org/en
   - This version of project uses node version 22.16.0 (LTS: Long Term Support)
   - Recommendation: Download and install LTS node version or you can use the node version used in this project

2. **Clone the Repository:**

   - ` https://github.com/gkhabas76/swag-labs.git`

   - `cd swag-labs`

3. **Install Dependencies:**

   `npm install`
