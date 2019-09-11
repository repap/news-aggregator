const mongoose = require('mongoose')
const {db} = require('../configuration')

module.exports = (() => {
  mongoose.connect(`mongodb+srv://${db.USER}:${db.PASSWORD}${db.URL}`, 
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
})()
