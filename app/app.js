const express = require('express')
const apiRoutes = require('./api/routes')

module.exports = (()=>{

  const app = express()

  app.use('/api', apiRoutes)

  return app
})()