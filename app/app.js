require('./db')

const express = require('express')
const apiRoutes = require('./api')
const bodyParser = require('body-parser')
const morgan = require('morgan')


module.exports = (()=>{
  const app = express()

  // Setup morgan logger
  app.use(morgan('combined'))

  // Setup Bodyparser
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())

  // Setup API Route
  app.use('/api', apiRoutes)

  return app
})()