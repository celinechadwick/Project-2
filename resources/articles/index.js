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

router.get("/", controller.index);
router.get("/:id", controller.show);
router.get('/:id/edit', controller.edit);

//posting a new article
router.post("/", controller.create);


// router.get('/:category', controller.showCategory);

//edit article by id
router.put('/:id', controller.update);
router.put('/:id', controller.edit)


//delete one item
router.delete('/:id', controller.destroy);


module.exports = router;
