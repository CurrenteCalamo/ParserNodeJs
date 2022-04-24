const { scrape } = require('./index');
const fs = require('fs');

jest.setTimeout(50000);

describe('puppeteer-demo :', () => {
    test('should be screenshot', () => {
        return scrape().then(() => {
            return expect(fs.existsSync('google.png')).toBe(true);
        });
    });
});
