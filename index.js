const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto ('https://www.google.com/');
    await page.screenshot({path:'google.jpeg'});
    await page.type ('.gLFyf', 'test');
    await page.keyboard.press('Enter');
    await page.waitForNavigation();
    await page.click('.tF2Cxc');
})();