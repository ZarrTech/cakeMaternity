const Products = require("../model/product");
const { StatusCodes } = require("http-status-codes");
const { NotFoundError } = require("../errors");
const multer = require('multer')
const path = require('path')

// getAllProduct
const getAllProduct = async (req, res) => {
  const product = await Products.find({});
  res.status(StatusCodes.OK).json({ products: product, count: product.length });
};

// getSingleProduct
const getSingleProduct = async (req, res) => {
  const { id: productId } = req.params;
  const product = await Products.findOne({ _id: productId });
  if (!product) {
    throw new NotFoundError(`no jobs with id of ${productId}`);
  }

  res.status(StatusCodes.OK).json({ product });
};

// createProduct
const createProduct = async (req, res) => {
  const imageUrl = req.file ? req.file.path : null;

  // Create the product object using both form data and uploaded file information
  const productData = {
    category: req.body.category,
    name: req.body.name,
    price: req.body.price,
    stockQuantity: req.body.stockQuantity,
    imageUrl: imageUrl, // Assign the uploaded image URL here
    desc: req.body.desc,
  };
  const product = await Products.create(productData);
  console.log(product);
  res.status(StatusCodes.CREATED).json({product});
};

// editProduct
const editProduct = async (req, res) => {
  const { id: productId } = req.params;
    const product = await Products.findOneAndUpdate(
        { _id: productId },
        req.body,
        { new: true, runValidators: true }
    );
    if (!product) {
        throw new NotFoundError(`no product with id of ${productId}`)
    }
    res.status(StatusCodes.OK).json({product})
};

// deleteProduct
const deleteProduct = async (req, res) => {
    const { id: productId } = req.params;
    const product = await Products.findOneAndRemove({ _id: productId })
    
    if (!product) {
        throw new NotFoundError(`no product with id of ${productId}`)
    }

    res.status(StatusCodes.OK).json()
}


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'Images')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now( + path.extname(file.originalname)))
  }
})

const upload = multer({
  storage: storage,
  limits: { fileSize: '5000000' },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/
    const mimeType = fileTypes.test(file.mimetype)
    const extname = fileTypes.test(path.extname(file.originalname))

    if (mimeType && extname) {
      return cb(null, true)
    }
    cb('Give proper file format to upload')
  }
})

module.exports = { getAllProduct, getSingleProduct, createProduct, editProduct, deleteProduct, upload };
