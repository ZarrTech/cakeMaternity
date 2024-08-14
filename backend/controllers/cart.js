const Cart = require('../model/cart')
const { StatusCodes } = require("http-status-codes");
const Product = require('../model/product')
const { NotFoundError } = require('../errors')

exports.getCart = async (req, res) => {
    const cart = await Cart.findOne({ userId: req.user.userId}).populate('items.productId')
    if (!cart) {
        throw new NotFoundError(`no cart found`)
    }
    res.status(StatusCodes.OK).json(cart)
}

exports.addCart = async (req, res) => {
    const { productId, quantity } = req.body
    let cart = Cart.findOne({ userId: req.user.userId })
    if (!cart) {
       cart = new Cart({userId: req.user.userId, items:[]}) 
    }

    const product = await Product.findById(productId)
    if (!product) {
        throw new NotFoundError(`product not found`)
    }

    const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId)
    if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity
    } else {
        cart.items.push({productId, quantity})
    }
}

exports.removeCart = async (req, res) => {
    const { productId } = req.param
    const cart = await Cart.findOne({ userId: req.user.userId })
    if (!cart) {
        throw new NotFoundError(`cart not found`)
    }
    cart.Filter(item => item.productId.toString() !== productId)
    cart.save()
    res.status(StatusCodes.OK).json(cart)
}
