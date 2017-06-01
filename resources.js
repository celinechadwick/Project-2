//Do I need this?
const express= require('express');
const router = express.Router();

// import the paths (resources/users):
router.use("/users", require("./resources/users"));
// start up express
const app = express();

module.exports = router;
