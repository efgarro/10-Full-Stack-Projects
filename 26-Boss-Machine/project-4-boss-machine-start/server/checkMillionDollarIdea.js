const checkMillionDollarIdea = (req, res, next) => {
  const { numWeeks, weeklyRevenue } = req.body;
  const value = numWeeks * weeklyRevenue;
  if (value >= 1000000) {
    next();
  } else {
    let newError = new Error("Idea is not worth the pain");
    newError.status = 404;
    next(newError);
  }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
