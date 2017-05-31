//Configure Node to talk to Postgres
const pgp = require("pg-promise")();

const db = pgp({
    database: "user_db"
});

module.exports = db;
