var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = "mongodb://amaithi24:B97nL8324ZXZAm3hu7Q8rGxKSUzQmeh78KIiwrzHE6dxJLH7XzNJMvtWrxYMTWYav2MvazK5bit1LwefI0DoBQ%3D%3D@amaithi24.documents.azure.com:10255/?ssl=true";
const express = require('express');
const bodyParser = require('body-parser');
const stringify = require('json-stringify-safe')
// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json());
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("familiesdb");
app.get('/', (req, res) => {
    dbo.collection("families").findOne({}, function(err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result)
        db.close();
      });
});

 
});
app.listen(8081, () => {
    console.log("Server is listening on port 8080");
});