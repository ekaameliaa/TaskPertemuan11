//import express
const { application } = require("express");
const express = require("express");
//buat object/server
const app = express();

//definisikan port
app.listen(3000, function () {
    console.log("server berjalan di: http://localhost:3000");
});

const router = require("./routes/api");
app.use(express.json());
app.use(router);
