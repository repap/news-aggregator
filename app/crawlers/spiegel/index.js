const {JSDOM} = require('jsdom')

const BASE_URL = 'https://www.spiegel.de'
let intervalId

const crawl = async () => {
  const dom = await JSDOM.fromURL('https://www.spiegel.de')
  const document = dom.window.document

  const newsList = [...document.querySelectorAll('.article-title a, .article-list a')]
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
}

function init({ crawlInterval }) {
  console.log(crawlInterval )
  if(intervalId) {
    clearInterval(intervalId)
  }

  crawl()
  setInterval(crawl, crawlerInterval)
}

module.exports = {
  init
}