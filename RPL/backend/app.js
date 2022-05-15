var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
var methodOverride = require("method-override");
//const session = require("express-session");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const categoryRouter = require("./app/Category/router");
const busRouter = require("./app/Bus/router");
const participantRouter = require("./app/Participant/router");
const pegawaiRouter = require("./app/Pegawai/router");
const paymentRouter = require("./app/Payment/router");
const facilityRouter = require("./app/Facility/router");
const itemRouter = require("./app/Item/router");
const akunRouter = require("./app/Akun/router");
const apiRouter = require("./api/v1/router");
mongoose.connect("mongodb://localhost:27017/RPL");

var app = express();
//express session
// app.use(
//   session({
//     secret: "keyboard cat",
//     resave: false,
//     saveUninitialized: true,
//     cookie: { maxAge: 60000 },
//   })
// );
//methodOverride
app.use(methodOverride("_method"));
app.use(express.static("uploads"));
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  "/sbAdmin",
  express.static(path.join(__dirname, "node_modules/startbootstrap-sb-admin-2"))
);

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/category", categoryRouter);
app.use("/bus", busRouter);
app.use("/participant", participantRouter);
app.use("/pegawai", pegawaiRouter);
app.use("/payment", paymentRouter);
app.use("/facility", facilityRouter);
app.use("/item", itemRouter);
app.use("/akun", akunRouter);
app.use("/api", apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});


module.exports = app;
