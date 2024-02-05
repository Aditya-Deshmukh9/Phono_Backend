const Products = require("../models/products-model");

const products = async (req, res, next) => {
  try {
    const response = await Products.find();
    if (!response) {
      res.status(404).json({ msg: "No service found" });
      return;
    }
    res.status(200).json({ response });
  } catch (error) {
    console.log(error);
  }
};

module.exports = products;
