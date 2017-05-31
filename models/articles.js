
//Set up all the sequel queries here. They are used in the controller.js


const db = require("../config/database");

let articles = {};

articles.findAll = () => {
    return db.manyOrNone("SELECT * FROM users ORDER BY date DESC");
};

articles.findById(id) {
  return db.one(`
    SELECT * FROM articles
    WHERE id = $1`, id)

)};
//setting up sort by the category:
articles.findByCategory(category) {
  return db.one(`
    SELECT * FROM articles
    WHERE category = $1`, category
  )};



articles.create = (id) => {
    return db.one(`
        INSERT INTO articles (title, post_date, category, img, wiki_text)
        VALUES ($1, $2, $3, $4, $5) RETURNING *;
    `,
    [ //What is this doing?
        newArticle.title,
        newArticle.post_date,
        newArticle.category,
        newArticle.img,
        newArticle.wiki_text,
    ]);
};

articles.show = (id) => {
  return db.one(`
    SELECT * articles
    WHERE id = $1
    `)
};


//WHY did he pass article and id into the function? are they placeholders for the req and res?
articles.update(article, id) => {
  return db.one(`
  UPDATE articles
  SET title = $/title/,
      post_date = $/post_date/,
      wiki_text = $/wiki_text/,
  WHERE id = $/id/
  RETURNING *
  `, article);
};

//passing in a placeholder again!
articles.destroy(id) => {
  return db.none(`
    DELETE
    FROM articles
    WHERE id = $1
  `, id);
};






module.exports = articles;
