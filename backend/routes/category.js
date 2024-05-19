const express = require('express')
const router = express.Router()

const {
  getAllCategory,
  getSingleCategory,
  postCategory,
  editCategory,
  deleteCategory,
} = require("../controllers/category");

router.route('/').get(getAllCategory).post(postCategory)
router.route('/:id').get(getSingleCategory).patch(editCategory).delete(deleteCategory)

module.exports = router