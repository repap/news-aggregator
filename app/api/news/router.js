const router = require('express').Router()
const {get, add} = require('./controller')
const {requestHandler} = require('../../../utils/requests')

router.get('/', requestHandler(get))
router.get('/:id', requestHandler(get))
router.post('/', requestHandler(add))

module.exports = router