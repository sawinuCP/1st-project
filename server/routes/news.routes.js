const {Router} = require("express");
const { getNews } = require("../controller/news.controller");

const newsRouter = Router();

newsRouter.get("/get",getNews);

module.exports = newsRouter;