const express = require("express");
const router = express.Router();

const {
  getAllProduct,
  getSingleProduct,
  createProduct,
  editProduct,
  deleteProduct,
  upload
} = require("../controllers/product");

router
  .route("/")
  .get(getAllProduct)
  .post(upload.single("imageUrl"), createProduct);
router
  .route('/product/:id')
  .get(getSingleProduct)
  .patch(editProduct)
  .delete(deleteProduct);

module.exports = router;
