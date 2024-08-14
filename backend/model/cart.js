const mongoose = require('mongoose')


const cartItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Product'
    },

    quantity: {
        type: Number,
        required: true,
        min: 1
    },
})

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [cartItemSchema],
})

module.exports = mongoose.model('Cart', cartSchema)