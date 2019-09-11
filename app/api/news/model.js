const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const NewsSchema = new Schema({
  title: String,
  category: String,
  subCategory: String,
  url: {
    type: String, 
    unique: true,
  }
});

const News = mongoose.model('News', NewsSchema)

module.exports = News