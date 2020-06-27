const express = require("express");
const { MAPS_KEY } = require("../../config/keys");
const router = express.Router();
const key = require('../../config/keys').MAPS_KEY;

router.get("/", (req, res) => {
    res.send(key);
  });

module.exports = router;