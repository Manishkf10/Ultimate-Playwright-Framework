# 🎭 Ultimate Playwright Framework

A scalable, enterprise-grade test automation framework demonstrating modern QA automation practices using **Playwright**, **TypeScript**, **JavaScript**, **Cucumber BDD**, **API Testing**, **CI/CD**.

> This project is intended for **learning and showcasing automation engineering skills** rather than fulfilling a specific business requirement. It demonstrates the ability to design, implement, maintain, and scale test automation frameworks.

---

## 📋 Table of Contents

- [Objectives](#objectives)
- [Technology Stack](#technology-stack)
- [Framework Features](#framework-features)
- [Project Structure](#project-structure)
- [Design Principles](#design-principles)
- [Implemented Concepts](#implemented-concepts)
- [Getting Started](#getting-started)
- [Future Enhancements](#future-enhancements)

---

## 🎯 Objectives

- ✅ Demonstrate end-to-end UI automation using Playwright
- ✅ Implement API testing and validation
- ✅ Support both JavaScript and TypeScript test development
- ✅ Implement BDD automation using Cucumber
- ✅ Follow Page Object Model (POM) architecture
- ✅ Generate comprehensive test execution reports
- ✅ Integrate automated tests with GitHub Actions CI/CD
- ✅ Showcase scalable framework design and best practices

---

## 🛠️ Technology Stack

| Category | Technologies |
|----------|---|
| **Languages** | JavaScript (ES6+), TypeScript |
| **Testing Framework** | Playwright, Cucumber BDD |
| **Runtime** | Node.js |
| **Version Control** | Git, GitHub |
| **CI/CD** | GitHub Actions |
| **Reporting** | HTML Reports, Allure Reporting |
| **Data Management** | JSON Test Data |

---

## ✨ Framework Features

### 🌐 UI Automation
- Cross-browser testing (Chromium)
- Advanced locator strategies
- Built-in assertions and validations
- Screenshot capture on failure
- Trace files for debugging
- Retry mechanism for flaky tests
- Parallel execution support

### 🔌 API Automation
- GET, POST, PUT, DELETE requests
- Request payload validation
- Response validation
- Authentication handling
- Reusable API utilities

### 📝 BDD Automation
- Feature files for scenario definition
- Step definitions with reusable steps
- Scenario execution and reporting
- Cucumber HTML reporting
- Clear, business-readable test scenarios

### 🏗️ Framework Design
- **Page Object Model (POM)** architecture
- Reusable utility functions
- Centralized test data management
- Configuration management
- Custom fixtures and hooks
- Clear separation of concerns

### 📊 Reporting & Debugging
- Playwright HTML Reports
- Cucumber HTML Reports
- Automatic screenshots on failure
- Trace files for detailed debugging
- Test execution metrics

### 🚀 CI/CD Integration
- **GitHub Actions** workflow automation
- Automated execution on:
  - Push events
  - Pull request events
- Artifact upload:
  - Playwright Report
  - Cucumber Report
  - Screenshots and traces

---

## 📁 Project Structure

```
project-root/
│
├── tests/                          # Playwright test files
│   └── [test files]
│
├── features/                       # Cucumber feature files
│   ├── step_definitions/           # Step definition files
│   └── support/                    # Hooks and support utilities
│
├── pageObjects/                    # Page Object Model classes
│   └── [page objects]
│
├── utils/                          # Utility functions and helpers
│   ├── api/                        # API testing utilities
│   ├── data/                       # Test data handlers
│   └── [other utilities]
│
├── screenshots/                    # Captured screenshots
├── test-results/                   # Test execution results
├── playwright-report/              # Playwright HTML report
│
├── .github/
│   └── workflows/                  # GitHub Actions workflows
│
├── playwright.config.js            # Playwright configuration
├── playwright.myConfig.js          # Custom Playwright configuration
├── cucumber.js                     # Cucumber configuration
├── package.json                    # Project dependencies
├── tsconfig.json                   # TypeScript configuration
└── README.md                       # This file
```

---

## 🎨 Design Principles

| Principle | Description |
|-----------|---|
| **Maintainable** | Clean, readable code with clear organization |
| **Scalable** | Easy to add new tests and features |
| **Reusable** | Shared utilities and page objects across tests |
| **Extensible** | Simple to extend with new capabilities |
| **CI/CD Ready** | Seamless integration with automation pipelines |
| **Multi-Framework** | Support for multiple testing approaches |

---

## 🧩 Implemented Concepts

- ✓ Playwright Test Runner
- ✓ Cucumber BDD Framework
- ✓ JavaScript Automation
- ✓ TypeScript Automation
- ✓ API Testing
- ✓ Visual Testing
- ✓ Screenshot Validation
- ✓ Retry Mechanism
- ✓ Fixtures and Hooks
- ✓ Advanced Assertions
- ✓ Test Data Parameterization
- ✓ Comprehensive Reporting
- ✓ CI/CD Pipeline Integration

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/Manishkf10/Ultimate-Playwright-Framework.git

# Navigate to project directory
cd Ultimate-Playwright-Framework

# Install dependencies
npm install
```

### Running Tests

```bash
# Run all Playwright tests (headless mode)
npm run regression

# Run specific test file
npx playwright test [test-file-name].spec.js

# Run API tests
npm run APiTest

# Run web tests
npm run webTest

# Run tests in headed mode
npm run test

# Run Safari tests
npm run safariTest

# Run Cucumber BDD tests with HTML reporting
npm run cucumberTest
```

### Available Scripts

| Script | Command | Description |
|--------|---------|---|
| `npm run regression` | `npx playwright test` | Run all Playwright tests in headless mode |
| `npm run test` | `npx playwright test API_Test1.spec.js --headed` | Run API test in headed mode |
| `npm run APiTest` | `npx playwright test --grep @api` | Run tests tagged with @api |
| `npm run webTest` | `npx playwright test --grep @web` | Run tests tagged with @web |
| `npm run safariTest` | `npx playwright test --config playwright.myConfig.js --project=safariTest` | Run Safari-specific tests |
| `npm run cucumberTest` | `npx cucumber-js --parallel 2 --format html:myCucumber-report.html` | Run Cucumber BDD tests with HTML report |

---

## 🔮 Future Enhancements

- 🐳 Docker Integration
- ☁️ Azure DevOps Pipeline
- 🌩️ AWS Deployment Pipeline
- 🗄️ Database Validation
- 📱 Mobile Automation
- 🧩 Playwright Component Testing
- 📈 Advanced Allure Dashboard
- 📊 Test Analytics and Metrics

---

## 📚 Additional Resources

- [Playwright Documentation](https://playwright.dev)
- [Cucumber Documentation](https://cucumber.io)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

## 📝 Purpose of This Project

This project does not target a specific business domain. Instead, it serves as a **demonstration of automation framework development skills** and **modern QA engineering practices**. It showcases the ability to design, implement, and maintain enterprise-grade test automation frameworks.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and enhancement requests.

---

**Built with ❤️ for QA Automation Excellence**
