const {JSDOM} = require('jsdom')
const axios = require('axios')

const {PORT} = require('../../configuration')

const BASE_URL = 'https://www.spiegel.de'

let intervalId
let lastCrawlResult = []

const crawl = async () => {
  const dom = await JSDOM.fromURL('https://www.spiegel.de')
  const document = dom.window.document
  
  const newsList = await axios.get('http://localhost:' + PORT + '/api/news')
    .catch(console.error)

  lastCrawlResult = newsList.data.data

  const rawNewsList = [...document.querySelectorAll('.article-title a, .article-list a')]
  .map(linkElement => ({
      title: linkElement.getAttribute('title'),
      url: BASE_URL + linkElement.getAttribute('href'),
      category: linkElement.getAttribute('href').split('/')[1],
      subCategory: linkElement.getAttribute('href').split('/')[2]
    }))
    .filter(newsObject => newsObject.category !== "")
    .map(newsObject => newsObject.subCategory.includes('-') ?
    { ...newsObject, subCategory: '' } :
      { ...newsObject })
      
  const filteredNewsList = 
    rawNewsList.filter(news => 
      !lastCrawlResult.find(lastNews => lastNews.url === news.url)) 

  // console.log(lastCrawlResult)
  console.log(filteredNewsList.length)

  await axios({
    method: 'post',
    url: 'http://localhost:' + PORT + '/api/news',
    headers: {
      'Content-Type': 'application/json'
    },
    data: { news: filteredNewsList }
  }).catch(console.error)
}

function init({ crawlInterval }) {
  if(intervalId) {
    clearInterval(intervalId)
  }

  crawl()
  setInterval(crawl, crawlInterval)
}

module.exports = {
  init
}