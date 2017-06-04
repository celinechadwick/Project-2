//Do I need this?
const express= require('express');
const router = express.Router();

// import the paths (resources/users):
router.use("/articles", require("./resources/articles"));
// start up express
const app = express();

module.exports = router;
