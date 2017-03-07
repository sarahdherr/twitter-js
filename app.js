const express = require("express");
// const morgan = require("morgan"); // isnt working right now, will ask fellow in AM
const app = express(); // creates an instance of an express application
// const volleyball = require("vollyball"); // isnt working right now, will ask fellow in AM

app.use(function(req, res, next) {
    next();
})

app.get("/", function(req, res) {
    res.send("<h1>Welcome to Twitter.js</h1>");
    // console.log(req.method, req.path);
});

app.get("/news", function(req, res) {
    res.send("<h1>Latest News</h1>");
});

app.get("/is-anybody-in-there", function(req, res) {
    res.send("<h3><em>IS ANYBODY IN THERE?</em></h3>");
    // console.log(req.method, req.path);
})

app.get("/modernism", function(req, res) {
    res.send("<p>Info here</p>");
})

app.post("/modernism", function(req, res) {
    // console.log(req.method, req.path);
})

app.get("/special/*", function(req, res) {
    res.send("<h2><em>You have reached a special area</em></h2>")
        // console.log(req.method, req.path);
})

var server = app.listen(3000, function() {
    console.log("Server listening at 3000.");
})