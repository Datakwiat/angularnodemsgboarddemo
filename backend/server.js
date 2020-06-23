// bring in express
var express = require('express');
// create express app
var app = express();
var bodyParser = require('body-parser');

var messages = [{text:'some text', owner: 'Bob'}, {text: 'more text', owner: 'Jane'}];

// enables CORS
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

// create generic route
app.get('/messages', (req, res) => {
    res.json(messages);
})

app.listen(1234);