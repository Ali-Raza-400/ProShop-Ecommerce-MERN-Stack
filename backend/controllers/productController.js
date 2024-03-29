import Products from "../models/productModel.js";
import asyncHandler from "express-async-handler";

// @desc Fetch All Products
// @route GET/api/products
// @access Public
const getProducts=asyncHandler(async(req,res)=>{
  const keyword = req.query.keyword
  ? {
      name: {
        $regex: req.query.keyword,
        $options: 'i',
      },
    }
  : {}
        const product = await Products.find({...keyword});
        res.json(product);
})

// @desc Fetch All Products
// @route GET/api/products
// @access Public

const getProductById= asyncHandler(async (req, res) => {
    const product = await Products.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })

  export {getProducts,getProductById}