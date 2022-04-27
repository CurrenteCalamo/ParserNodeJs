import cheerio from "cheerio"
import puppeteer from "puppeteer"

const options = {
  uri: `https://kanobu.ru/games/popular/?page=1`,
  transform: (body) => cheerio.load(body)
};

const scrape = async (options) => {
  const browser = await puppeteer.launch(options);

  const page = await browser.newPage();

  await page.goto(options.uri);

  let content = await page.content();

  let $ = options.transform(content);

  await browser.close();
  return $;
};


export default (params) => scrape({ ...options, ...params }) 