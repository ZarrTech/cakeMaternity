const express = require('express')
const router = express.Router()
const { getCart, addCart, removeCart } = require('../controllers/cart')

router.route('/').get(getCart)
    router.route('/add').post(addCart)
router.route('/remove/:productId').delete(removeCart)

module.exports = router