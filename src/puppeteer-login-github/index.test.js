const scrape = require('./index');
const config = require('../config');


jest.setTimeout(500000);
describe('puppeteer login github', () => {
    test('should return array', async () => {
        await scrape({
            username: config.github.username,
            password: config.github.password,
            search: "bitcoin",
        });

    });
});
