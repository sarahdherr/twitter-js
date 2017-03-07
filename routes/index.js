const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const tweetBank = require('../tweetBank');

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.use(express.static('public'))

router.get('/', function(req, res) {
    let tweets = tweetBank.list();
    res.render('index', { tweets: tweets, showForm: true });
});

router.post('/tweets', urlencodedParser, function(req, res) {
    var name = req.body.name;
    var text = req.body.text;
    tweetBank.add(name, text);
    res.redirect('/');
});

router.get('/stylesheets/style.css', function(req, res) {
    res.sendFile('/stylesheets/style.css');
});

router.get('/users/:name', function(req, res) {
    var name = req.params.name;
    var list = tweetBank.find({ name: name });
    res.render('index', { tweets: list, showForm: true, name: name });
});

router.get('/tweets/:id', function(req, res) {
    var id = req.params.id;
    var list = tweetBank.find({ id: id });
    res.render('index', { tweets: list });
});

module.exports = router;