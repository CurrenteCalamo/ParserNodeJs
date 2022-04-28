import puppeteer from 'puppeteer'
import { appendFileSync } from 'fs';
import { buffer } from 'stream/consumers';

const options = {
    launch: { headless: false },
    setViewport: { width: 1240, height: 680 },
    url: 'https://kanobu.ru/games/popular/?page=1',
    file: {
        regexp: /\.svg/,
        path: './download/test.svg',
        selector: '.style_button__OyUbx.HeaderNotifications_button__5Dh3t'
    }
};


const writeFileInterceptor = ({ file }) => (e) => {

    if (file.regexp.test(e._url)) {
        e.buffer().then(buffer => {
            console.log(buffer.toString())
            appendFileSync(file.path, buffer.toString());
        });
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


export default (params) => scrape({ ...options, ...params });
