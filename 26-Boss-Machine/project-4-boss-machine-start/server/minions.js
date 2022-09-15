const express = require("express");
const minionsRouter = express.Router();
const {
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
} = require("./db");
module.exports = minionsRouter;

minionsRouter.param("minionId", (req, res, next, id) => {
  req.minionObj = getFromDatabaseById("minions", id);
  next();
});

minionsRouter.get("/", (req, res, next) => {
  const minionsArr = getAllFromDatabase("minions");
  res.send(minionsArr);
});

minionsRouter.get("/:minionId", (req, res, next) => {
  res.send(req.minionObj);
});

minionsRouter.post("/", (req, res, next) => {
  const newMinion = req.body;
  const { name, title, salary } = newMinion;
  if (name && title && salary) {
    console.log(newMinion);
    addToDatabase("minions", newMinion);
    res.send(newMinion);
  } else {
    let newError = new Error("Must include name, title and salary!");
    newError.status = 404;
    next(newError);
  }
});

minionsRouter.put("/", (req, res, next) => {
  console.log("helllw put");
  const minionToUpdate = req.body;
  console.log(minionToUpdate);
  res.send()
});

minionsRouter.use((err, req, res, next) => {
  const status = err.status || 500;
  console.log(`${err.status} ${err.message}`);
  res.status(status).send(err.message);
});
