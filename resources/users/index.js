//specifies where the data is going on the page

const express = require("express");
const router = express.Router();

//Import controller as a module
const controller = require("./controller");

// GET /users -> controller.index

// GET /users/:id -> controller.show
// POST /users -> controller.create
// PUT /users/:id -> controller.update
// DELETE /users/:id -> controller.destroy

router.get("/articles", controller.index);

//posting a new article
router.post("/post", controller.create);

router.get("/articles/:id", controller.show);

router.get('/articles/:category', controller.showCategory)

//edit article by id
router.put('/articles/:id', controller.update);

router.delete('/articles/:id', controller.destroy);

]

module.exports = router;
