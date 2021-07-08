module.exports = (app) => {
    const controller = require("../controllers/todo.controllers");
  
    const router = require("express").Router();
  
    // get all todos (this is a function)
    router.get("/", controller.findAll);
  
    // get a todo by ID
    router.get("/:id", controller.findById);
  
    app.use("/api/todo", router);
  };
  