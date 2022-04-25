const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const options = {
    launch: { headless: false },
    setViewport: { width: 1240, height: 680 },
    url: 'https://kanobu.ru/games/popular/?page=1',
    file: {
        regexp: /\.svg/,
        path: './test.svg',
        selector: '.style_button__OyUbx.HeaderNotifications_button__5Dh3t'
    }
};


const writeFileInterceptor = ({ file }) => {
    return (e) => {
        // console.log(e._url)
        if (file.regexp.test(e._url)) {
            e.buffer().then(buffer => {
                // console.log(buffer.toString())
                fs.appendFileSync(path.join(__dirname, file.path), buffer.toString());
            });
        }
    }
}

const scrape = async (options) => {

    const browser = await puppeteer.launch(options.launch);
    const page = await browser.newPage();
    await page.goto(options.url, { waitUntil: ['domcontentloaded'] })

    await page.setRequestInterception(true);
    await page.on('response', (e) => {
        writeFileInterceptor(options)(e)
    })
    await page.click(options.file.selector, { waitUntil: ['domcontentloaded'] });

    await browser.close();
};
module.exports = async (params) => scrape({ ...options, ...params });
