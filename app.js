const express = require("express");
const app = express(); // creates an instance of an express application

app.get("/", function(req, res) {
    res.send("<h1>Welcome to Twitter.js</h1>");
})








var server = app.listen(3000, function() {
    console.log("Server listening at 3000.");
})