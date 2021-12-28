//import mysql
const mysql = require("mysql");
//const { DEC8_BIN } = require("mysql/lib/protocol/constants/charsets");
require("dotenv").config();
//buat koneksi
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

db.connect(function(err){
    if (err){
        console.log("konnek error" + err);
        return
    }
    else {
        console.log("koneksi berhasil");
        return;
    }
})

module.exports = db;