var express = require("express");
var router = express.Router();

const db = require("../models");

router.get("/", async (req, res, next) => {
  await db.Schedule.findAll()
    .then(result => {
      return res.json(result);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
