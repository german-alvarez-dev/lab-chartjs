const express = require('express');
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("stats-page")
})

module.exports = router