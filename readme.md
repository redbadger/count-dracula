# Count Dracula 🧛🏻

Mock web app to test [continous compliance](https://github.com/redbadger/continous-compliance/)

## Infrastructure

To read more about infrastructure, go [here](./infrastructure/readme.md)

## Accessibility

Count Dracula conforms to WCAG-2.1 AA standards. We use [Pa11y](https://pa11y.org/) to automate the accessibility testing. 

Pa11y runs on every push to Github, using a bash script inside web/scripts/a11y.sh. The URLS it tests against are set in web/.pa11yci.json. The json outputs are stored in web/test-results/accessibility-tests.

## End to End Testing 

Count Dracula uses Puppeteer and Jest as its testing frameworks. 

The end to end tests are inside web/e2e within the files devices.test.ts and test.ts. The screenshot and json outputs will be put inside web/test-results. 

To run the end to end tests, start the server by running `yarn workspace web start`. Then you can then run the tests: `yarn workspace web run jest --config ./e2e/jest.config.js ./e2e --json --outputFile=./test-results/e2e-tests/results.json`

Github Actions will be running the tests from a bash script inside web/scripts/e2e.sh

## Unit Testing

Jest is used for unit testing. To run unit tests locally, `yarn workspace web test --watchAll`.

The unit tests are run after every push to Github. The json results are stored in web/test-results/unit-tests.  
