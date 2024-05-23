const mysql = require("mysql");

const config = {
  host: "localhost",
  user: "erick",
  password: "qwerty",
  database: "api",
};


const pool = mysql.createPool(config);

module.exports = pool;
