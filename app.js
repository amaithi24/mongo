const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = "mongodb://amaithi24:B97nL8324ZXZAm3hu7Q8rGxKSUzQmeh78KIiwrzHE6dxJLH7XzNJMvtWrxYMTWYav2MvazK5bit1LwefI0DoBQ%3D%3D@amaithi24.documents.azure.com:10255/?ssl=true";



app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());




app.get('/', (req, res) => {

    MongoClient.connect(url, function(err, db) {
        console.log("sds");
        if (err) throw err;
        var dbo = db.db("familiesdb");
        dbo.collection("families").findOne({}, function(err, result) {
            if (err) throw err;
            console.log(result);
           // res.send(result)
            //db.closeConnection();
          });
        });

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!jjjjj');
});

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});