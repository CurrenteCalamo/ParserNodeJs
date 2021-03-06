import scrape from './index'

describe('cheerio-demo :', () => {

    const url = 'https://kanobu.ru/games/popular/?page=1'


    test('should be cheerio :', async () => {
        const $ = await scrape(url);
        expect(typeof $).toBe('function');
    });

    test('should\'t be undefined', async () => {
        const $ = await scrape(url);

        return expect($('.knb-cell').each((i, el) => {
            const link = $(el).find('a').attr('href');
            const title = $(el).find('.BaseElementCard_body__fcrUh').text();
            console.log(`${i + 1}:${title} https://kanobu.ru${link}\n`);
        })).not.toBeUndefined();

    })
});

