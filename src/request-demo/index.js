import cheerio from "cheerio"
import request from "request-promise"


const options = {
  uri: "https://animebee.to/home",
  transform: (body) => cheerio.load(body)
};

const scrape = async (options) => {
  return await request(options);
};


export default (params) => scrape({ ...options, ...params });