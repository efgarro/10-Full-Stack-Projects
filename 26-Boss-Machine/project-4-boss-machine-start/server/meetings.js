const express = require("express");
const meetingsRouter = express.Router();
const {
  getAllFromDatabase,
  createMeeting,
  deleteAllFromDatabase,
  addToDatabase,
} = require("./db");
module.exports = meetingsRouter;

meetingsRouter.get("/", (req, res, next) => {
  const meetingsArr = getAllFromDatabase("meetings");
  res.send(meetingsArr);
});

meetingsRouter.post("/", (req, res, next) => {
  const newMeeting = createMeeting();
  if (newMeeting) {
    addToDatabase("meetings", newMeeting);
    res.status(201).send(newMeeting);
  } else {
    let newError = new Error("Meeting Error!");
    newError.status = 404;
    next(newError);
  }
});
meetingsRouter.delete("/", (req, res, next) => {
  deleteAllFromDatabase("meetings");
  res.status(204).send();
});
