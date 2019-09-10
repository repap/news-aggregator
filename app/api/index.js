const router = require('express').Router()

router.use('/news', require('./news/router'))

module.exports = router