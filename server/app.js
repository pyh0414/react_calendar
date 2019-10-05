const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const scheduleRouter = require("./routes/schedule");
const scheduleRouters = require("./routes/schedules");

const db = require("./models");
const app = express();

db.sequelize.sync();
app.use(
  cors({
    origin: "http://localhost:8080",
    credentials: true
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "views")));

app.use("/schedule", scheduleRouter);
app.use("/schedules", scheduleRouters);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;

  // render the error page
  res.status(err.status || 500);
});

module.exports = app;
