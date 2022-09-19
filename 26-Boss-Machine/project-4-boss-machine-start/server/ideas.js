const express = require("express");
const checkMillionDollarIdea = require("./checkMillionDollarIdea");
const ideasRouter = express.Router();
const {
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require("./db");
module.exports = ideasRouter;

ideasRouter.param("ideaId", (req, res, next, id) => {
  req.ideaId = id;
  next();
});

const verifyIndex = (req, res, next) => {
  const ideaIndex = getAllFromDatabase("ideas").findIndex(
    (obj) => obj.id === req.ideaId
  );
  if (ideaIndex !== -1) {
    next();
  } else {
    let newError = new Error("Non-Valid ID");
    newError.status = 404;
    next(newError);
  }
};

ideasRouter.get("/", (req, res, next) => {
  const ideasArr = getAllFromDatabase("ideas");
  res.send(ideasArr);
});

ideasRouter.get("/:ideaId", verifyIndex, (req, res, next) => {
  req.ideaObj = getFromDatabaseById("ideas", req.ideaId);
  res.send(req.ideaObj);
});

ideasRouter.post("/", checkMillionDollarIdea, (req, res, next) => {
  if (newIdea) {
    addToDatabase("ideas", newIdea);
    res.status(201).send(newIdea);
  } else {
    let newError = new Error("Must include name, title and salary!");
    newError.status = 404;
    next(newError);
  }
});

ideasRouter.put("/:ideaId", verifyIndex, (req, res, next) => {
  const updatedIdea = updateInstanceInDatabase("ideas", req.body);
  res.send(updatedIdea);
});

ideasRouter.delete("/:ideaId", verifyIndex, (req, res, next) => {
  deleteFromDatabasebyId("ideas", req.ideaId);
  res.status(204).send();
});

ideasRouter.use((err, req, res, next) => {
  const status = err.status || 500;
  console.log(`${err.status} ${err.message}`);
  res.status(status).send(err.message);
});
