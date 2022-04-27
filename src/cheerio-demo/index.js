import axios from "axios"
import cheerio from "cheerio"

const scrape = async (url) => {
    const { data } = await axios.get(url)
    return cheerio.load(data)
}


export default scrape 