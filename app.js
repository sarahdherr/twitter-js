const express = require("express");
const app = express(); // creates an instance of an express application
const volleyball = require("volleyball");

app.use(volleyball);
// app.use(function(req, res, next) {
//     next();
// })

app.get("/", function(req, res) {
    res.send("<h1>Welcome to Twitter</h1>");
    // console.log(req.method, req.path);
});

app.get("/news", function(req, res) {
    res.send("<h1>Latest News</h1>");
});
console.log('abc');

app.get("/is-anybody-in-there", function(req, res) {
    res.send("<h3><em>Hello?</em></h3><h4><em>Hello?</em></h4><h5><em>Hello?</em></h5>");
    // console.log(req.method, req.path);
})

app.get("/modernism", function(req, res) {
    res.send("<p>Info here</p>");
})

app.post("/modernism", function(req, res) {
    res.send('POST request to homepage');
    // console.log(req.method, req.path);
})

app.get("/special/*", function(req, res) {
    res.send("<h2><em>You have reached a special area</em></h2>")
        // console.log(req.method, req.path);
})

var server = app.listen(3000, function() {
    console.log("Server listening at 3000.");
})