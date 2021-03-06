import cheerio from 'cheerio';
import scrape from './index'

jest.setTimeout(50000);
describe('request-demo :', () => {
    test('should response the cheerio', async () => {
        return await scrape().then($ => {
            return expect(typeof $).toEqual(typeof cheerio);
        });
    });

    test('should load dynamic page', async () => {
        return await scrape({
            uri: "https://www.google.com/search?num=50&source=hp&ei=_7sQWsxIyvnAAtatovgN&q=me&oq=me&gs_l=psy-ab.3..35i39k1l2j0i67k1l3j0j0i131k1j0l3.2903.3059.0.3315.3.2.0.0.0.0.93.181.2.2.0....0...1.1.64.psy-ab..1.2.181.0...0.G5YDo4vOG8w"
        }).then($ => {
            return expect($('title').text()).toMatch(/Google/);
        });
    });

    test('the page shold contain elements', async () => {
        return await scrape({
            uri: "https://www.google.com/search?num=50&source=hp&ei=_7sQWsxIyvnAAtatovgN&q=me&oq=me&gs_l=psy-ab.3..35i39k1l2j0i67k1l3j0j0i131k1j0l3.2903.3059.0.3315.3.2.0.0.0.0.93.181.2.2.0....0...1.1.64.psy-ab..1.2.181.0...0.G5YDo4vOG8w"
        }).then($ => {
            return expect($('a').length).toBeGreaterThan(0);
        });
    });
});