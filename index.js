
const express = require('express');
//This stores whatever is in the express module in a variable

const app = express();

const PORT = process.argv[2] || process.env.PORT || 3000;


//set up body parser
const bodyParser = require('body-parser');

const methodOverride = require('method-override');

//configure EJS
app.set('view engine', 'ejs');

//Do I set this to JSON?
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//ROUTES
app.use(require('./resources'));

app.use(express.static("./public"));



app.listen(PORT, () => console.log(`server  up and listening on port ${PORT}`));
