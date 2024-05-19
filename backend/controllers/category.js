const Category = require("../model/category");
const { StatusCodes } = require("http-status-codes");
const { NotFoundError } = require("../errors");

// getAllCategory
const getAllCategory = async (req, res) => {
  const category = await Category.find({});
  res.status(StatusCodes.OK).json({ category });
};

// getSingleCategory
const getSingleCategory = async (req, res) => {
  const { id: catID } = req.params;
  const category = await Category.findOne({ _id: catID });

  if (!category) {
    throw new NotFoundError(`no jobs with id of ${productId}`);
  }

  res.status(StatusCodes.OK).json({ category });
};

// postCategory
const postCategory = async (req, res) => {
  const category = await Category.create(req.body);
  res.status(StatusCodes.CREATED).json({ category });
};

// editCategory
const editCategory = async (req, res) => {
  const { id: catID } = req.params;
  const category = await Category.findOneAndUpdate({ _id: catID }, req.body, {
    new: true,
    runValidators: true,
  });
    if (!category) {
      throw new NotFoundError(`no jobs with id of ${productId}`);
    }

      res.status(StatusCodes.OK).json({category});
};

// deleteCategory
const deleteCategory = async (req, res) => {
  const { id: catID } = req.params;
  const category = await Category.findOneAndDelete({ _id: catID });

  if (!category) {
    throw new NotFoundError(`no jobs with id of ${productId}`);
  }

  res.status(StatusCodes.OK).json();
};

module.exports = {getAllCategory, getSingleCategory, postCategory, editCategory, deleteCategory}
