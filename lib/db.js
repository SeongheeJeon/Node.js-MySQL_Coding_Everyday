var mysql = require("mysql");
var password = require("../password").password;

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: password,
  database: "opentutorials",
});
db.connect();

module.exports = db;
