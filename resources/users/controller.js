
//Take all the models functions and use them to render the EJS with data


// const db = require("../../config/database");
const Article = require("../../models/articles");

let controller = {};

controller.index = (req, res) => {
    //Logic to show all the articles
    Article
    .findAll()
    .then((article_data) => {
        res.render("articles.ejs", {
            articles: articles_data
        })
    })
    .catch((err) => {
        console.log(err);
    });
} //throw an error.

controller.create = (req, res) => {
//save a new article/post to the database
    Article
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
  Article
  .findById()
  .then((article_data) => {
      res.render("article.ejs", {
          articles: articles_data
      })
  })
  .catch((err) => {
      console.log(err);
  });
} //throw an error.



//HELP HERE:
controller.showCategory = (req, res) => {
//get by category
  Article
  .findByCategory()
  .then((article_data) => {
      res.render("category.ejs", {
          articles: articles_data
      })
  })
  .catch((err) => {
      console.log(err);
  });
} //throw an error.


//UPDATING. HELP!!
controller.update = (req, res) => {
  Article
    .findById()
    .then((article_data) => {
      res.redirect(`/articles/${article_data.id}`);
    })
    .catch((error) => {
        console.error(error);
        throw error;
    });
}


controller.destroy = (req, res) => {
  //delete one article
  Article
  .findById()
  .then((article_data) => {
    res.redirect(`/articles/${article_data.id}`);
  })
  .catch((error) => {
      console.error(error);
      throw error;
  });
}


module.exports = controller;
