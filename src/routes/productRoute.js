const express = require("express");
const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const { isAuthenticated } = require("../middlewares/isauthentication");

const router = express.Router();

router.post("/addProduct", isAuthenticated, createProduct);
router.get("/allProduct", isAuthenticated, getAllProducts);
router.get("/getSingle/:id", isAuthenticated, getSingleProduct);
router.put("/updateProduct/:id", isAuthenticated, updateProduct);
router.delete("/deleteProduct/:id", isAuthenticated, deleteProduct);

module.exports = router;
