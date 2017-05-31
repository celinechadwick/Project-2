const express = require("express");
const router = express.Router();

//Import controller as a module
const controller = require("./controller");

// GET /users -> controller.index
// GET /users/:id -> controller.show
// POST /users -> controller.create
// PUT /users/:id -> controller.update
// DELETE /users/:id -> controller.destroy

router.get("/", controller.index);

router.post("/", controller.create);

module.exports = router;
