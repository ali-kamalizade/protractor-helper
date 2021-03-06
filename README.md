# *better-protractor* - no more excuses for not writing tests

[![npm version](https://badge.fury.io/js/better-protractor.svg)](https://badge.fury.io/js/better-protractor)
[![Build Status](https://travis-ci.org/ali-kamalizade/better-protractor.svg?branch=master)](https://travis-ci.org/ali-kamalizade/better-protractor)

Test everything you can test with **better-protractor** which relies on Protractor, the awesome end-to-end-testing framework made by the Angular team.
However, Protractor (and therefore *better-protractor*) can be used on any kind of web page, Angular is not required!

## Features
*better-protractor* will help you to write better end-to-end tests by providing a simple API on top of Protractor. Optimized for usage with **Typescript**, but tests written in Javascript work as well.

- Navigate to any web page (with relative path support for Angular)
- Click any element (query by ID, CSS, Xpath, HTML tag)
- Scroll to a specific element
- Get browser cookies, localStorage and sessionStorage
- Press mouse buttons and keyboard keys
- Hover element
- Fill and clear input fields
- Get DOM properties and style attributes of elements
- Responsiveness: Adjust your window to simulate any device (tablet, smartphone, laptop)
- Check if elements exist / are visible
- Submit forms
- Take screenshots of web pages
- Get the number of elements on a web page by CSS query
- Get the size of any element
- Display mouse pointer
- Access the underlying Protractor API
- And many more useful methods at your disposal

[Read this article if you want to learn more about end-to-end testing in general.](https://medium.freecodecamp.org/why-end-to-end-testing-is-important-for-your-team-cb7eb0ec1504)

[I also wrote an article about software quality assurance and testing in general.](https://medium.com/@alirak94/why-software-qa-matters-not-only-for-testers-and-how-to-get-into-it-65669f77e746)

## Installation:
1. If you do not have Protractor and Webdriver setup yet, then please do so: [Protractor setup](http://www.protractortest.org/#/tutorial#setup). *better-protractor* relies on Protractor in order to work.
2. Install better-protractor with NPM: ```npm install better-protractor``` or ```npm install better-protractor --only=dev```

## Usage:
- **Recommended (TypeScript)**: Create a custom class which extends BetterProtractorService. You can override the default methods and add your own custom variables and methods.
```javascript
const service: CustomTestService = new CustomTestService();
```
- You can also directly use *better-protractor* in TypeScript if the provided methods suit your needs or if you do not want to let your custom page object class inherit.
```javascript
const service: BetterProtractorService = new BetterProtractorService();
```
- You can also use *better-protractor* in Javascript.
```javascript
const e2e = require("better-protractor");
const service = new e2e.BetterProtractorService();
```
- For writing the actual tests, you can use [Jasmine](https://jasmine.github.io/). However, *better-protractor* does not rely on a particular testing framework so you are free to use any Javascript testing framework (e.g. Mocha, Jest, QUnit).

## Compatibility:
- Tested with Angular, TypeScript > 2 and latest Protractor (5.3).
- *better-protractor* works on any Angular page. For other pages (e.g. running Vue.js / React / static web page), simply use ```disableAngular()``` which will make your tests run on every web page.

## Examples
See the e2e folder for code examples in Javascript and TypeScript.

## Local development setup
1. Download the repository.
2. Get Node.js and install it if you haven't already.
3. Use ```npm install``` to install the necessary dependencies.
4. Run ```webdriver-manager update``` (once or when you updated your browser).
5. Run ```webdriver-manager start``` to launch Webdriver(Selenium)
6. Run ```protractor``` or ```protractor-once``` to run the sample end-to-end tests in the e2e-folder (written in Javascript and TypeScript).
7. Run ```npm test``` to run the unit & e2e tests.

## Contribution
Pull requests and feature requests are welcome!
