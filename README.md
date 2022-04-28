# ParserNodeJs
## Demo list
Each demo written as separate applications.
All demo are under the `./src` directory
- [cheerio-demo](https://github.com/CurrenteCalamo/ParserNodeJs/tree/master/src/cheerio-demo) - how to use cheerio on server side

- [puppeteer-cheerio-demo](https://github.com/CurrenteCalamo/ParserNodeJs/tree/master/src/puppeteer-cheerio-demo) - wrap puppeteer content to cheerio
- [puppeteer-demo](https://github.com/CurrenteCalamo/ParserNodeJs/tree/master/src/puppeteer-demo) - the minimal code needs to run puppeteer
- [puppeteer-download-demo](https://github.com/CurrenteCalamo/ParserNodeJs/tree/master/src/puppeteer-download-demo) - how to download file using puppeteer

- [puppeteer-login-github](https://github.com/CurrenteCalamo/ParserNodeJs/tree/master/src/puppeteer-login-github) - common steps to login somewhere and receive some userfull private information.

- [request-demo](https://github.com/CurrenteCalamo/ParserNodeJs/tree/master/src/request-demo) - common logic to to receive static html

- [save-from-demo](https://github.com/CurrenteCalamo/ParserNodeJs/tree/master/src/save-from-demo) - show how to fight with ubnormal behavior sites, without puppeteer using sanbox on serverside.
---
## Install

```javascript
npm install
mv ./src/config.template.js ./src/config.js
mkdir ./src/download
```

The config used to set some private infos. Like github `login` / `password`. Site tokens.

---


## Running the app
```bash
$ npm run test ./src/cheerio-demo
```
## Stay in touch
- Author - [Georgy Khrulev](https://currentecalamo.herokuapp.com/requisites/)
- Website - [currentecalamo.com](https://currentecalamo.herokuapp.com)
- Twitter - [@currentecalamo](https://twitter.com/)
