const { scrape } = require("./index.js");

describe('cheerio-demo :', () => {

    const url = 'https://kanobu.ru/games/popular/?page=1'

    test('should be function', async () => {
        const $ = await scrape(url);
        console.log($.html());
        expect(typeof $).toBe('function');
    });

    test('should be', async () => {
        const $ = await scrape(url);

        expect($('.knb-cell').each((i, el) => {
            const link = $(el).find('a').attr('href');
            const title = $(el).find('.BaseElementCard_body__fcrUh').text();
            console.log(`${i + 1}:${title} https://kanobu.ru${link}\n`);

        })).not.toBeUndefined();

    })

});

