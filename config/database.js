
//pg promise only

const pgp = require("pg-promise") ();

let db;

if (process.env.NODE_ENV === "production") {
  db = pgp(process.env.DATABASE_URL);
} else {
  db = pgp({
    database: "wiki_db"
  });
}

module.exports = db;
