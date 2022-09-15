const express = require("express");
const minionsRouter = require("./minions");
const apiRouter = express.Router();

module.exports = apiRouter;

apiRouter.use("/minions", minionsRouter);
