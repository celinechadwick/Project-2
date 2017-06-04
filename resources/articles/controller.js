
//Take all the models functions and use them to render the EJS with data


// const db = require("../../config/database");
const Article = require("../../models/articles");

let controller = {};

controller.index = (req, res) => {
    //Logic to show all the articles
    console.log('in index method')
    Article
    .findAll()
    .then((article_data) => {
        res.render("index.ejs", {
            articles: article_data
        })
    })
    .catch((err) => {
        console.log(err);
    });
} //throw an error.

controller.create = (req, res) => {
//save a new article/post to the database
console.log('in create method')
    Article
    .create(req.body.title, req.body.post_date, req.body.category, req.body.img, req.body.wiki_text)
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
  .findById(req.params.id)
  .then((article_data) => {
      res.render("article.ejs", {
          articles: article_data
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
controller.edit = (req, res) => {
  Article
    .findById(req.params.id)
    .then((article_data) => {
      res.render("edit.ejs", {
        articles: article_data
      });
    })
    .catch((error) => {
        console.error(error);
        throw error;
    });
}

controller.update = (req, res) => {
  Article
  .update(req.body.title, req.body.img, req.body.wiki_text, req.body.category, req.params.id)
  // .update(req.body.article)
  // .update(req.params.id)
  .then((article_data) => {
    console.log(article_data);
    res.redirect(`/articles`);
  })
  .catch((error) => {
    console.log(req.body)
      console.error(error);
      throw error;
  });
}



controller.destroy = (req, res) => {
  //delete one article
  Article
  .destroy(req.params.id)
  .then(() => {
    res.redirect(`/articles`);
  })
  .catch((error) => {
      console.error(error);
      throw error;
  });
}


module.exports = controller;
