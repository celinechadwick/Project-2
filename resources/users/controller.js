
//Take all the models functions and use them to render the EJS with data


// const db = require("../../config/database");
const article = require("../../models/articles");

let controller = {};

controller.index = (req, res) => {
    //Logic to show all the articles
    article
    .findAll()
    .then((article_data) => {
        res.render("articles.ejs", {
            articles: articles_data
        });
    })
    .catch((err) => {
        console.log(err);
    });
} //throw an error.

controller.create = (req, res) => {
//save a new article/post to the database
    article
    .create(req.body.article)
    .then((article_data) => {
        res.redirect("/articles");
    })
    .catch((err) => {
        console.log(err);
    });
}
//HELP HERE:
controller.show = (req, res) => {
//get one article
  article
  .findById()
  .then((article_data) => {
      res.render("article.ejs", {
          articles: articles_data
      });
  })
  .catch((err) => {
      console.log(err);
  });
} //throw an error.



//HELP HERE:
controller.showCategory = (req, res) => {
//get by category
  article
  .findByCategory()
  .then((article_data) => {
      res.render("category.ejs", {
          articles: articles_data
      });
  })
  .catch((err) => {
      console.log(err);
  });
} //throw an error.


//UPDATING. HELP!!
controller.update(req.body.article, req.params.id) {

    .then((article_data) => {
      res.redirect("/article/:id");
    });
    .catch((error) => {
        console.error(error);
        throw error;
    });
}


controller.destroy = (req.params.id) => {
  //delete one article
  .then((article_data) => {
    res.redirect("/articles")
  })
}


module.exports = controller;
