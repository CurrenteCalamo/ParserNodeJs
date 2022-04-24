const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

const options = {
    search: 'bicoin',
    launch: { headless: false },
    setViewport: { width: 1240, height: 680 },
    transform: (body) => cheerio.load(body)
};
const getSearchUrl = (options) => {
    const userToSearch = options.search || 'john';
    return `https://github.com/search?q=${userToSearch}&type=Users`;
}

const search = async (page, options) => {
    await page.goto(getSearchUrl(options), { waitUntil: ['domcontentloaded'] });
}
const login = async (page, options) => {
    const CREDS = {
        username: options.username,
        password: options.password
    };

    const USERNAME_SELECTOR = '#login_field';
    const PASSWORD_SELECTOR = '#password';
    const BUTTON_SELECTOR = 'input.btn.btn-primary.btn-block.js-sign-in-button';

    await page.goto('https://github.com/login');
    await page.click(USERNAME_SELECTOR);
    await page.keyboard.type(CREDS.username);
    await page.click(PASSWORD_SELECTOR);
    await page.keyboard.type(CREDS.password);
    await page.click(BUTTON_SELECTOR);
    await page.waitForNavigation();
}


const scrape = async (options) => {
    const browser = await puppeteer.launch(options.launch);
    const page = await browser.newPage();

    await page.setViewport(options.setViewport);

    await login(page, options);
    await search(page, options);

    await browser.close();
}



module.exports =
    (params) => scrape({ ...options, ...params });
