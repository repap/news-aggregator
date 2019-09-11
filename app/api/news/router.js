const router = require('express').Router()
const {get, add} = require('./controller')
const {requestHandler} = require('../../../utils/requests')

router.get('/:_id?', requestHandler(get))
router.post('/', requestHandler(add))

module.exports = router