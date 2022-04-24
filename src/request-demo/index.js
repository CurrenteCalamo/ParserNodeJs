const request = require('request-promise');
const cheerio = require('cheerio');

const options = {
  uri: "https://www.google.com",
  transform: (body) => cheerio.load(body)
};

const scrape = async (options) => {
  return await request(options);
};

module.exports = (params) => scrape({ ...options, ...params });
