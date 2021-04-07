import puppeteer from 'puppeteer'

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/');
  await page.screenshot({ path: 'homepage.png' });


  await browser.close();
})();

