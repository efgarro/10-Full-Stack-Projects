const express = require("express");
const ideasRouter = express.Router();
const {
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require("./db");
module.exports = ideasRouter;

ideasRouter.param("ideasId", (req, res, next, id) => {
  req.ideasId = id;
  next();
});

ideasRouter.get("/", (req, res, next) => {
  const ideasArr = getAllFromDatabase("minions");
  res.send(ideasArr);
});

ideasRouter.get("/:ideasId", (req, res, next) => {
  req.minionObj = getFromDatabaseById("minions", req.ideasId);
  res.send(req.minionObj);
});

ideasRouter.post("/", (req, res, next) => {
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

ideasRouter.put("/:ideasId", (req, res, next) => {
  const updatedMinion = updateInstanceInDatabase("minions", req.body);
  res.send(updatedMinion);
});

ideasRouter.delete("/:ideasId", (req, res, next) => {
  const deletedMinion = deleteFromDatabasebyId("minions", req.ideasId);
  res.send(deletedMinion);
});

ideasRouter.use((err, req, res, next) => {
  const status = err.status || 500;
  console.log(`${err.status} ${err.message}`);
  res.status(status).send(err.message);
});
