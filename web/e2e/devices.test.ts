import puppeteer from 'puppeteer';
import devices = puppeteer.devices;

let browser: puppeteer.Browser;
let page: puppeteer.Page;

const selector = {
  h1: 'h1',
};

const path = {
  iPhoneXHomepage: './test-results/e2e-screenshots/iPhoneXHomepage.png',
  iPadProLandscapeHomepage: './test-results/e2e-screenshots/iPadProLandscapeHomepage.png',
  galaxyS5Homepage: './test-results/e2e-screenshots/galaxyS5Homepage.png',
};

const iPadProLandscape = devices['iPad Pro landscape'];
const iPhoneX = devices['iPhone X'];
const galaxyS5 = devices ['Galaxy S5'];

describe('Tests homepage on different devices', () => {
  it('tests the form title on iPad Pro landscape', async () => {
      browser = await puppeteer.launch();
      page = await browser.newPage();
      await page.emulate(iPadProLandscape);
      await page.goto('http://localhost:3000');
    const h1InnerText = await page.$eval(selector.h1, (element) => {
      return element.innerHTML;
    });
    await page.screenshot({ path: path.iPadProLandscapeHomepage, fullPage: true });
    expect(h1InnerText).toBe('Blood donation');
    await browser.close();
  });

  it('tests the form title on iPhone X', async () => {
      browser = await puppeteer.launch();
      page = await browser.newPage();
      await page.emulate(iPhoneX);
      await page.goto('http://localhost:3000');

    const h1InnerText = await page.$eval(selector.h1, (element) => {
      return element.innerHTML;
    });
    await page.screenshot({ path: path.iPhoneXHomepage, fullPage: true  });
    expect(h1InnerText).toBe('Blood donation');
    await browser.close();
  });

  it('tests the form title on Galaxy S5', async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.emulate(galaxyS5);
    await page.goto('http://localhost:3000');

    const h1InnerText = await page.$eval(selector.h1, (element) => {
      return element.innerHTML;
    });
    await page.screenshot({ path: path.galaxyS5Homepage, fullPage: true  });
    expect(h1InnerText).toBe('Blood donation');
    await browser.close();
  });
});
