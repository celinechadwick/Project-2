
//pg promise only

const pgp = require("pg-promise") ();

const db = pgp(
  {database: "wiki_db"}
)

module.exports = db;
