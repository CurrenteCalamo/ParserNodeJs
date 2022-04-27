import { existsSync } from 'fs';
import scrape from './index'

jest.setTimeout(50000);

describe('puppeteer-demo :', () => {
    test('should be screenshot', () => {
        return scrape().then(() => {
            return expect(existsSync('./download/screenshot.png')).toBe(true);
        });
    });
});
