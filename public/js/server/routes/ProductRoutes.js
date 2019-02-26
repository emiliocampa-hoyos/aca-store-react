const express = require("express");
const router = express.Router();
const {create, list} = require("../controllers/ProductController");


router.post("/products", create);
router.get("/products", list);

module.exports = router;

