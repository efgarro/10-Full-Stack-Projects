const express = require("express");
const minionsRouter = require("./minions");
const ideasRouter = require("./ideas");
const apiRouter = express.Router();

module.exports = apiRouter;

apiRouter.use("/minions", minionsRouter);
apiRouter.use("/ideas", ideasRouter);
