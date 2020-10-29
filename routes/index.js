var express = require("express");
var router = express.Router();
const order = require("../controllers/external");
router.post("/order", order.orderProduct);
router.get("/order", order.getProducts);

module.exports = router;
