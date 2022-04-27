import { existsSync } from 'fs';
import scrape from './index'

jest.setTimeout(50000);
describe('puppeteer-download-demo :', () => {
    const options = {
        launch: { headless: false },
        setViewport: { width: 1240, height: 680 },
        url: 'https://kanobu.ru/games/popular/?page=3',
        file: {
            regexp: /\.svg/,
            path: './download/test.svg',
            selector: '.style_button__OyUbx.HeaderNotifications_button__5Dh3t'
        }
    };

    test('try download', () => {
        return scrape(options).then(() => {
            expect(existsSync(options.file.path)).toBe(true);
        });
    });
});
