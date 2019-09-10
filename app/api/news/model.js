const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const NewsSchema = new Schema({
  title: String,
  url: String,
  category: String,
  subCategory: String,
});

module.exports = mongoose.model('News', NewsSchema)