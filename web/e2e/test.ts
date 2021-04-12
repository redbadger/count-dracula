import puppeteer from 'puppeteer';

let browser: puppeteer.Browser;
let page: puppeteer.Page;

const selector = {
  h1: 'h1',
  allCheckboxes: '.nhsuk-checkboxes__input',
  checkbox1: '.nhsuk-checkboxes__item:nth-child(1) > input',
  checkbox2: '.nhsuk-checkboxes__item:nth-child(2) > input',
  checkbox3: '.nhsuk-checkboxes__item:nth-child(3) > input',
  submitButton: 'button.nhsuk-button',
  backButton: 'a.nhsuk-back-link__link',
};

const path = {
  homepage: './test-results/e2e-screenshots/homepage.png',
  checkbox1: './test-results/e2e-screenshots/checkbox1.png',
  checkbox2: './test-results/e2e-screenshots/checkbox2.png',
  checkbox3: './test-results/e2e-screenshots/checkbox3.png',
  formPage: './test-results/e2e-screenshots/formPage.png',
  returnToForm: './test-results/e2e-screenshots/returnToForm.png',
  thanks: './test-results/e2e-screenshots/thanks.png',
};

describe('End to end tests', () => {
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000');

  });

  it('tests the form title can be zoomed up to 200%', async () => {
    const session = await page.target().createCDPSession();
    await session.send('Emulation.setPageScaleFactor', {
      pageScaleFactor: 2, // 200% zoom
    });
    const h1InnerText = await page.$eval(selector.h1, (element) => {
      return element.innerHTML;
    });
    await page.screenshot({ path: path.homepage });
    expect(h1InnerText).toBe('Blood donation');
  });

  it('loads the form checkboxes unticked', async () => {
    const session = await page.target().createCDPSession();
    await session.send('Emulation.setPageScaleFactor', {
        pageScaleFactor: 1, //back to 100% zoom
    });
    const checkboxes = await page.$$(selector.allCheckboxes);
    const checkboxesChecked = await Promise.all(
      checkboxes.map(
        async (checkbox) => await checkbox.evaluate((node) => node.checked),
      ),
    );
    const areAllCheckboxesNotChecked = checkboxesChecked.every(
      (check) => check === false,
    );
    expect(areAllCheckboxesNotChecked).toBe(true);
  });

  it('ticks the first checkbox and checks the submit is disabled', async () => {
    const checkbox1 = await page.$(selector.checkbox1);
    const submitButton = await page.$(selector.submitButton);

    if (checkbox1 && submitButton) {
      await checkbox1.click();

      const isCheckbox1Checked = await checkbox1.evaluate(
        (node) => node.checked,
      );

      const isSubmitButtonDisabled = await submitButton.evaluate(
        (node) => node.disabled,
      );

      await page.screenshot({ path: path.checkbox1 });
      expect(isCheckbox1Checked).toBe(true);
      expect(isSubmitButtonDisabled).toBe(true);
    }
  });

  it('ticks the second checkbox and checks the submit is disabled', async () => {
    const checkbox2 = await page.$(selector.checkbox2);
    const submitButton = await page.$(selector.submitButton);

    if (checkbox2 && submitButton) {
      await checkbox2.click();

      const isCheckbox2Checked = await checkbox2.evaluate(
        (node) => node.checked,
      );
      const isSubmitButtonDisabled = await submitButton.evaluate(
        (node) => node.disabled,
      );

      await page.screenshot({ path: path.checkbox2 });
      expect(isCheckbox2Checked).toBe(true);
      expect(isSubmitButtonDisabled).toBe(true);
    }
  });

  it('ticks the third checkbox and checks the submit is now enabled', async () => {
    const checkbox3 = await page.$(selector.checkbox3);
    const submitButton = await page.$(selector.submitButton);

    if (checkbox3 && submitButton) {
      await checkbox3.click();

      const isCheckbox3Checked = await checkbox3.evaluate(
        (node) => node.checked,
      );
      const isSubmitButtonEnabled = !(await submitButton.evaluate(
        (node) => node.disabled,
      ));

      await page.screenshot({
        path: path.checkbox3,
      });

      expect(isCheckbox3Checked).toBe(true);
      expect(isSubmitButtonEnabled).toBe(true);
    }
  });

  it('clicks the submit button and goes to the thanks page', async () => {
    const submitButton = await page.$(selector.submitButton);

    if (submitButton) {
      await submitButton.click();
      const h1InnerText = await page.$eval(
        selector.h1,
        (element) => element.innerHTML,
      );

      await page.screenshot({ path: path.thanks });
      expect(h1InnerText).toBe('Thanks');
    }
  });
  it('clicks the back button to return to form page', async () => {
       const backButton = await page.$(selector.backButton);

           if (backButton) {
             await backButton.click();
             const h1InnerText = await page.$eval(
               selector.h1,
               (element) => element.innerHTML,
             );
             await page.screenshot({ path: path.returnToForm });
             expect(h1InnerText).toBe('Blood donation');
          };
  });

  afterAll(async () => {
    browser.close();
  });
});

