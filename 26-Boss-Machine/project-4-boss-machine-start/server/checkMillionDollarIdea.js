const checkMillionDollarIdea = (req, res, next) => {
  const numWeeks = Number(req.body.numWeeks);
  const weeklyRevenue = Number(req.body.weeklyRevenue);
  if (numWeeks && weeklyRevenue) {
    const yield = numWeeks * weeklyRevenue;
    if (yield >= 1000000) {
      next();
    } else {
      let newError = new Error("Idea is not worth the pain!");
      newError.status = 400;
      next(newError);
    }
  } else {
    let newError = new Error("Number of Weeks or Revenue are invalid!");
    newError.status = 400;
    next(newError);
  }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
