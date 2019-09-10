const express = require('express')
const apiRoutes = require('./api')
const bodyParser = require('body-parser')


module.exports = (()=>{
  const app = express()

  // Setup Bodyparser
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())

  // Setup API Route
  app.use('/api', apiRoutes)

  return app
})()