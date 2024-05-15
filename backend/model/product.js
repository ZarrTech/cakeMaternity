const  mongoose  = require("mongoose");


const productSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: [true, "please provide category"],
    },
    name: {
      type: String,
      required: [true, "please provide name"],
    },
    price: {
      type: Number,
      required: [true, "please provide price"],
      min: [1, "price of product should be above 1"],
    },
    stockQuantity: {
      type: Number,
      required: [true, "please provide at least one product"],
    },
    imageUrl: {
      type: String,
      required: [true, "please provide image"],
    },
    desc: {
      type: String,
      required: [true, "please provide description"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Cake', productSchema)