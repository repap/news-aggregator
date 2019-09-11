const model = require('./model')

const add = async (req, res) => {
  const requestBody = {...req.body}

  const news = await new model(requestBody).save()

  return res.json({
    status: 'success',
    data: news
  })
}

const get = async (req, res) => {
  const {_id} = req.params

  const newsList = await model.find({_id})

  return res.json({
    status: 'success',
    data: newsList
  })
}

module.exports = {
  add,
  get,
}