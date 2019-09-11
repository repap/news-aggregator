require('dotenv').config()
const spiegelCrawler = require('./spiegel')
const configruation = require('../configuration')

spiegelCrawler.init({ ...configruation.crawler })