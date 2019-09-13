const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const NewsSchema = new Schema({
  title: {type: String, required: true},
  category: {type: String, required: true},
  subCategory: String,
  url: {
    type: String, 
    unique: true,
    required: true,
  },
  rate: {type: Number, default: 0},
  created: {type: Date, default: Date.now, immutable: true},
  updated: {type: Date, default: Date.now}
});

const News = mongoose.model('News', NewsSchema)

module.exports = News