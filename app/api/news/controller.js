const model = require('./model')

const add = async (req, res) => {
  const {news} = req.body

  const newsList = await Promise.all(
    news
      .map(news => new model(news)
        .save()
        .catch(err => console.error(err.message)))
  ).catch(err => console.error(err.message))

  return res.json({
    status: 'success',
    data: newsList
  })
}

const get = async (req, res) => {
  const {id} = req.params

  let newsList = []

  if(id) {
    newsList.push(await model.findById(id))
  } else {
    newsList = await model.find()
  }

  return res.json({
    status: 'success',
    data: newsList
  })
}

module.exports = {
  add,
  get,
}