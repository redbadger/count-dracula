import puppeteer from 'puppeteer';

const takeScreenshot = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000');
  await page.screenshot({ path: './e2e/homepage.png' });

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
