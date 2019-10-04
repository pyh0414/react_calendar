var express = require("express");
var router = express.Router();

const db = require("../models");

router.get("/", async (req, res, next) => {
  await db.Schedule.findAll()
    .then(result => {
      return res.status(200).json(result);
    })
    .catch(err => {
      console.error(err);
      return next(err);
    });
});

module.exports = router;
