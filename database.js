var pgp = require("pg-promise")();
console.log("In the db");
var dbConfig = process.env.DATABASE_URL;
var db = pgp(dbConfig);

module.exports = db;
