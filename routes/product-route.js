const express = require("express");
const products = require("../Controllers/product-controller");
const router = express.Router();

router.route("/products").get(products);

module.exports = router;
