const fs = require('fs');
const scrape = require('./index.js')

jest.setTimeout(50000);
describe('puppeteer download svg :', () => {
    test('try download', () => {
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

        return scrape(options).then(() => {
            expect(!fs.existsSync(options.file.path)).toBe(true);
        });
    });
});
