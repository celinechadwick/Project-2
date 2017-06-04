
//Set up all the sequel queries here. They are used in the controller.js


const db = require("../config/database");

module.exports = {

findAll() {
    return db.manyOrNone("SELECT * FROM articles");
},

findById(id) {
  return db.oneOrNone(`
    SELECT * FROM articles
    WHERE id = $1`, [id]
  )},
//setting up sort by the category:
findByCategory(category) {
  return db.one(`
    SELECT * FROM articles
    WHERE category = $1`, [category]
    );
},



create(title, post_date, category, img, wiki_text) {
    return db.one(`
        INSERT INTO articles (title, post_date, category, img, wiki_text)
        VALUES ($1, $2, $3, $4, $5) RETURNING *;
    `, [title, post_date, category, img, wiki_text])
},

show(id) {
  return db.one(`
    SELECT * FROM articles
    WHERE id = $1
    `, [id]
  )
},


update(title, img, wiki_text, category, id) {
  return db.one(`
  UPDATE articles
  SET title = $1,
      img = $2,
      wiki_text = $3,
      category = $4
  WHERE id = $5
  RETURNING *
  `, [title, img, wiki_text, category, id]
  );
},

//passing in a placeholder again!
destroy(id) {
  return db.none(`
    DELETE
    FROM articles
    WHERE id = $1
  `, [id]
  );
}


};
