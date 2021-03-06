module.exports = (app) => {
  const controller = require("../controllers/user.controllers");

  const router = require("express").Router();

  // get all users (this is a function)
  router.get("/", controller.findAll);

  // get a user by ID
  router.get("/:id", controller.findById);

  app.use("/api/user", router);
};
