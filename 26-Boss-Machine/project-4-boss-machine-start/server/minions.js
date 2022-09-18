const express = require("express");
const minionsRouter = express.Router();
const {
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require("./db");
module.exports = minionsRouter;

minionsRouter.param("minionId", (req, res, next, id) => {
  req.minionId = id;
  next();
});

const verifyIndex = (req, res, next) => {
  const minionIndex = getAllFromDatabase("minions").findIndex(
    (obj) => obj.id === req.minionId
  );
  if (minionIndex !== -1) {
    next();
  } else {
    let newError = new Error("Non-Valid ID");
    newError.status = 404;
    next(newError);
  }
};

minionsRouter.get("/", (req, res, next) => {
  const minionsArr = getAllFromDatabase("minions");
  res.send(minionsArr);
});

minionsRouter.get("/:minionId", verifyIndex, (req, res, next) => {
  req.minionObj = getFromDatabaseById("minions", req.minionId);
  res.send(req.minionObj);
});

minionsRouter.post("/", (req, res, next) => {
  const newMinion = req.body;
  if (newMinion) {
    addToDatabase("minions", newMinion);
    res.status(201).send(newMinion);
  } else {
    let newError = new Error("Must include name, title and salary!");
    newError.status = 404;
    next(newError);
  }
});

minionsRouter.put("/:minionId", verifyIndex, (req, res, next) => {
  const updatedMinion = updateInstanceInDatabase("minions", req.body);
  res.send(updatedMinion);
});

minionsRouter.delete("/:minionId", verifyIndex, (req, res, next) => {
  deleteFromDatabasebyId("minions", req.minionId);
  res.status(204).send();
});

minionsRouter.use((err, req, res, next) => {
  const status = err.status || 500;
  console.log(`${err.status} ${err.message}`);
  res.status(status).send(err.message);
});
