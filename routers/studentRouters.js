const shopRoutes = require("../controllers/shopController");
const express = require("express");
const router = express.Router();

//Producto
router.post("/products", shopRoutes.addProduct);
router.get("/products", shopRoutes.getProducts);
router.get("/products/:id", shopRoutes.getProduct);
router.delete("/products/:id", shopRoutes.deleteProduct);

//Marca
router.post("/marks", shopRoutes.addMark);
router.get("/mark/:id", shopRoutes.getMark);
router.delete("/mark/:id", shopRoutes.deleteMark);

module.exports = router;