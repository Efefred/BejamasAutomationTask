# Aklamio Test Automation Project

The purpose of this project is to develop a test automation framework to automate the testing of the Conduit web application, <https://qa-recruitment-task.netlify.app/>

## Prerequisites 
### 1. System Requirement
* Windows 7 and above 
* MacOS 10.9 and above
* Linux Ubuntu 12.04 and above, Fedora 21 and Debian

### 2. NodeJs and NPM
### 3. An IDE (I used Visual Studio Code) 

## Installation 
 First, download and install node.js.
<https://nodejs.org/en/download/>

Then install cypress locally using the *npm* command 
``` 
npm install cypress --save-dev
```
Read more about cypress installation and setup via the link;
<https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements>

## Folder Structure
### *integration*
The integration folder contains the test (spec) files. The three tests are listed below.

* addProductsShowCart
* clearRemovesCartItems
* filterProductByCategory


### *support*
In order to declutter the spec file, several functions are created as custom commands in *support/commands.js* file which are referenced from the individual spec files. 

### *cypress.json* 
The base Url is defined in the cypress.json file and referenced with the ```cy.visit('/') ``` command.

```yaml
{
   "baseUrl": "https://qa-recruitment-task.netlify.app/", 
}
```

### *package.json*
The commands to execute the tests on a single browser and on two different browsers, in headed and headless modes, are defined in scripts section of the package.json file. The test execution for Safari browser was done on <https://crossbrowsertesting.com>

```yaml
{
   "run:chrome:headed": "cypress run --headed --browser chrome",
   "run:firefox:headed": "cypress run --headed --browser firefox",
   "run:edge:headed": "cypress run --headed --browser edge",
   "run:chrome": "cypress run --browser chrome",
   "run:firefox": "cypress run --browser firefox",
   "run:edge": "cypress run --browser edge",
}
```

## Test Strategy

### Entry Criteria:
* AUT or SUT is available
* *Features to be Tested* are explicitly stated/defined
* Test data is available
* An optimal amount of test cases have been written
* Test environment is ready and the necessary set-up/configuration done

### Test Case Design:
The test cases are prepared based on exploratory testing since there was no test basis. Also the the test cases are defined in specs files contained in the integration folder.
 
### Test Case Execution:
A *Test Readiness Checklist* will checked before the execution Test scripts and the following testing types will be executed.
* Functional testing
* Sanity testing
* Smoke testing
* Regression testing


### Exit Criteria: 
* All test cases designed for the project have been executed.
* Sufficient coverage of the features to be tested.
* Every identified bug has been fixed and closed
* No high priority or severity bug exists in the SUT/AUT
* Order from sponsor/executive management to close all pending tasks and end the project 
* Budget for the project has been depleted

### Test Reporting: 
The *mochawesome reporter* will be used as the reporting tool for the test results. The test results are stored in this directory, *cypress/reports/mocha*. Follow these links for details on how to install and configure Mocahwesome reporter. <https://www.npmjs.com/package/mochawesome>. <https://www.linkedin.com/pulse/cypress-test-automation-reporting-mochawesome-amarasiri-/>

### Source Control: 
A private repository, *BejamasAutomationTask*, is created in GitHub. All commits will be pushed to this remote repository .

## Glossary
* *NPM:* Node Package Manager
* *AUT:* Application Under Test
* *SUT:* System Under Test