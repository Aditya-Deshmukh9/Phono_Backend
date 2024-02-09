const Products = require("../models/products-model");

const products = async (req, res, next) => {
  try {
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 40;

    const skip = (page - 1) * limit;

    const response = await Products.find().skip(skip).limit(limit);

    if (!response || response.length === 0) {
      return res.status(404).json({ msg: "No products found" });
    }

    res.status(200).json({ response, total: response.length });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

module.exports = products;
