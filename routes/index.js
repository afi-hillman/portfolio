const { Router } = require("express");
const getHomeView = require("../controller/getHomeView");
const getAllUserView = require("../controller/getAllUserView");
const getNewUserView = require("../controller/getNewUserView");
const path = require("node:path");
const appRoutes = Router();

appRoutes.get("/", getHomeView);
appRoutes.get("/all-user", getAllUserView);
appRoutes.get("/new-user", getNewUserView);

appRoutes.get("/thank-you", function (req, res) {
  res.render("pages/thanks");
});

appRoutes.get("/error", function (req, res) {
  res.render("pages/error");
});

appRoutes.get("/*", function (req, res) {
  res.redirect("/error");
});

module.exports = appRoutes;
