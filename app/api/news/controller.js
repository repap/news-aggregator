const model = require('./model')

const add = (req, res) => {
  const news = {...req.body}

  // save news
  // new model -> save

  return res.json({
    status: 'success',
    data: news
  })
}

const get = (req, res) => {
  const {id} = req.params
  const {filter} = req.query

  // get news
  // model.find -> id or filter
  const news = {
    title: 'test',
    url: 'https://www.heise.de',
    category: 'test',
    subCategory: 'mega'
  }

  return res.json({
    status: 'success',
    data: news
  })
}

module.exports = {
  add,
  get,
}