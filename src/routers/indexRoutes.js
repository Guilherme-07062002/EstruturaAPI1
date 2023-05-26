const express = require("express");
const { teste } = require("../controllers/controller");
const router = express.Router();

// Testar conexão
router.route("/test").get(teste);

module.exports = router;
