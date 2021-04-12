import puppeteer from 'puppeteer';
import devices = puppeteer.devices;

let browser: puppeteer.Browser;
let page: puppeteer.Page;

const selector = {
  h1: 'h1',
};

const path = {
  iPhoneXHomepage: './test-results/e2e-screenshots/iPhoneXHomepage.png',
  iPadHomepage: './test-results/e2e-screenshots/iPadHomepage.png',
  galaxyS5Homepage: './test-results/e2e-screenshots/galaxyS5Homepage.png',
};

const iPad = devices['iPad'];
const iPhoneX = devices['iPhone X'];
const galaxyS5 = devices ['Galaxy S5'];

describe('Tests on different devices', () => {
  it('tests the form title on iPad', async () => {
      browser = await puppeteer.launch();
      page = await browser.newPage();
      await page.emulate(iPad);
      await page.goto('http://localhost:3000');

    const h1InnerText = await page.$eval(selector.h1, (element) => {
      return element.innerHTML;
    });
    await page.screenshot({ path: path.iPadHomepage });
    expect(h1InnerText).toBe('Blood donation');
  });

  it('tests the form title on iPhone X', async () => {
      browser = await puppeteer.launch();
      page = await browser.newPage();
      await page.emulate(iPhoneX);
      await page.goto('http://localhost:3000');

    const h1InnerText = await page.$eval(selector.h1, (element) => {
      return element.innerHTML;
    });
    await page.screenshot({ path: path.iPhoneXHomepage });
    expect(h1InnerText).toBe('Blood donation');
    });

    it('tests the form title on Galaxy S5', async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.emulate(galaxyS5);
        await page.goto('http://localhost:3000');

      const h1InnerText = await page.$eval(selector.h1, (element) => {
        return element.innerHTML;
      });
      await page.screenshot({ path: path.galaxyS5Homepage });
      expect(h1InnerText).toBe('Blood donation');
      });

  afterAll(async () => {
    browser.close();
  });
});

