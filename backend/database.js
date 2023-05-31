require("dotenv").config({path: './.env'});
const mysql = require("mysql");

const db = mysql.createConnection({
    host: process.env.SERVER_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
});

db.connect((err => {
    if(err) throw err;
    console.log("MySQL Connected");
}));

exports.databaseConnection = db;