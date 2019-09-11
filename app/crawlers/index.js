require('dotenv').config()
const spiegelCrawler = require('./spiegel')
const configruation = require('../configuration')

console.log(configruation.crawler)

spiegelCrawler.init({ ...configruation.crawler })