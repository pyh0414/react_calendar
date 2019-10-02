var express = require("express");
var router = express.Router();

const db = require("../models");

router.post("/", async (req, res, next) => {
  const { title, content, period, start, end } = req.body;

  await db.Schedule.create({
    title,
    content,
    start_time: start,
    end_time: end,
    period
  })
    .then(result => {
      return res.json(result);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
