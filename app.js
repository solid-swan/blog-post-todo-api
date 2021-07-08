const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("You have reached the top-level route!!");
});

require("./src/routes/blogposts.route")(app);
require("./src/routes/user.route")(app);
require("./src/routes/todo.route")(app);

app.listen(3000, function () {
  console.log(`Example app listening on port 3000`);
});
