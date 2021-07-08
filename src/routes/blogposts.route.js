module.exports = (app) => {
  const router = require("express").Router();

  const controller = require("../controllers/blogposts.controllers");

  // get all blogposts
  router.get("/", controller.findAll);

  // get blogpost by id
  router.get("/:id", controller.findById);

  app.use("/api/blogposts", router);
};
