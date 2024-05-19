const Products = require("../model/product");
const { StatusCodes } = require("http-status-codes");
const { NotFoundError } = require("../errors");
const multer = require('multer')
const path = require('path')

// const FILE_TYPE_MAP = {
//   "imageUrl/png": "png",
//   "imageUrl/jpeg": "jpeg",
//   "imageUrl/jpg": "jpg",
//   "imageUrl/gif": "gif",
//   "imageUrl/webp": "webp",
// };

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     const isValid = FILE_TYPE_MAP[file.mimetype];
//     let uploadError = new Error("invalid image type");
//     if (isValid) {
//       uploadError = null;
//     }
//     cb(uploadError, '/public/images'); // Assuming images are stored in public/images directory
//   },
//   filename: (req, file, cb) => {
//     const fileName = file.originalname.split(" " || "-")[0]
//     const extension = FILE_TYPE_MAP[file.mimetype];
//     cb(null, `${fileName}-${Date.now()}.${extension}`)
//   },
// });


// const upload = multer({
//   storage: storage,
//   limits: {fileSize: '5000000'}
  
// }).single('imageUrl')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(file);
    cb(null, "upload");
  },

  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });




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
  
    const fileName = req.file.filename;
    const basePath = `${req.protocol}://${req.get("host")}/images/`; // Update with correct base URL
    const productData = {
      category: req.body.category,
      name: req.body.name,
      price: req.body.price,
      stockQuantity: req.body.stockQuantity,
      imageUrl: `${basePath}${fileName}`,
      desc: req.body.desc,
    };
    const product = await Products.create(productData);
   
    res.status(StatusCodes.CREATED).json(product);
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
    const product = await Products.findOneAndDelete({ _id: productId })
    
    if (!product) {
        throw new NotFoundError(`no product with id of ${productId}`)
    }

    res.status(StatusCodes.OK).json()
}




module.exports = { getAllProduct, getSingleProduct, createProduct, editProduct, deleteProduct, upload }
