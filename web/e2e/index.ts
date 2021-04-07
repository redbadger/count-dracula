import puppeteer from 'puppeteer';

const checkboxValidation = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000');
  await page.screenshot({ path: './e2e/homepage.png' });

// to test validation on checkboxes

  const checkbox1 = (await page.$(".nhsuk-checkboxes__input:first-child"))!;
  await checkbox1.click();
  const disabledButton = await page.$('button[disabled]');
  const isDisabled = disabledButton !== null;
  await page.screenshot({ path: './e2e/e2e-screenshots/checkbox1.png' });

  const checkbox2 = (await page.$(".nhsuk-checkboxes__item:nth-child(2)"))!;
  await checkbox2.click();
  await page.screenshot({ path: './e2e/e2e-screenshots/checkbox2.png' });

  const checkbox3 = (await page.$(".nhsuk-checkboxes__item:nth-child(3)"))!;
  await checkbox3.click();
  const enabledButton = await page.$('button:not([disabled])');
  const isEnabled = enabledButton !== null;
  await page.screenshot({ path: './e2e/e2e-screenshots/checkbox3.png' });


  await browser.close();
};

const start = async () => {
  try {
    await takeScreenshot();
  } catch (error) {
    console.error(error);
  }
};

start();
