
const express = require('express');
//This stores whatever is in the express module in a variable

const app = express();

const PORT = process.argv[2] || process.env.PORT || 3000;

//set up Marked
const marked = require('marked');
//set up body parser
const bodyParser = require('body-parser');

const methodOverride = require('method-override');


app.post("/", (req, res) => {
    //Take the contents of the form textarea and parse them into HTML
    const parsedContent = marked(req.body.markdown);

    res.render("markdown", {
        content: parsedContent
    });
});


//is this right?
app.use(methodOverride('_method'))

// app.use(express.static("./public"));
// app.use('/vendor/jquery', express.static(dir.materialize));
// app.use('/vendor/materialize', express.static(dir.materialize));



//configure EJS
app.set('view engine', 'ejs');

//Jason figured this out
app.set('views', __dirname + '/views')

//Do I set this to JSON?
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//ROUTES
app.use(require('./resources'));





app.listen(PORT, () => console.log(`server  up and listening on port ${PORT}`));
