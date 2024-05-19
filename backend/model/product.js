const  mongoose  = require("mongoose");


const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please provide name"],
    },
    category: {
      type: String,
      required: [true, "please provide category"],
    },
    price: {
      type: Number,
      required: [true, "please provide price"],
      min: [1, "price of product should be above 1"],
    },
    stockQuantity: {
      type: Number,
      required: [true, "please provide at least one product"],
      min: [1, "stock quantity should be above 1"],
    },
    imageUrl: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      required: [true, "please provide description"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Cake', productSchema)