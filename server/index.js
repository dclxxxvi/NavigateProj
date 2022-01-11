import express from "express"
import path from 'path'
import config from 'config'
import mysql from 'mysql'

const PORT = config.get("serverPort") ?? 5000;
const app = express();

const pool = mysql.createPool({
    connectionLimit: 10,
    host: "sql11.freesqldatabase.com", 
    user: "sql11463739",
    database: "sql11463739",
    password: "t1qDAR4HgS"
});



app.get("/", function(req, res){
    pool.query("SELECT * FROM user", function(err, data) {
        res.json({
            message: data
        })
    });
});

app.listen(PORT, () => 
    console.log(`App is listening on port ${PORT}!`
));