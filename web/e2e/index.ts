import puppeteer from 'puppeteer';

const checkboxValidation = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000');
  await page.screenshot({ path: './e2e/homepage.png'});

// tests validation on checkboxes

  const checkbox1 = (await page.$(".nhsuk-checkboxes__input:first-child"))!;
  await checkbox1.click();
  const disabledButton = await page.$('button[disabled]');
  const isDisabled = disabledButton !== null;
  await page.screenshot({ path: './e2e/checkbox1.png'});

  const checkbox2 = (await page.$(".nhsuk-checkboxes__item:nth-child(2)"))!;
  await checkbox2.click();
  await page.screenshot({ path: './e2e/checkbox2.png' });

  const checkbox3 = (await page.$(".nhsuk-checkboxes__item:nth-child(3)"))!;
  await checkbox3.click();
  const enabledButton = await page.$('button:not([disabled])');
  const isEnabled = enabledButton !== null;
  await page.screenshot({ path: './e2e/checkbox3.png'});

  // test for submitting and moving to the thanks page, then pressing back button to return to form
  await page.click('button.nhsuk-button');
  await page.screenshot({ path: './e2e/thanks.png'});

  const backButton = (await page.$('a.nhsuk-back-link__link'))!;
  await backButton.click();
  await page.screenshot({ path: './e2e/returnToForm.png'});

  await browser.close();
};
