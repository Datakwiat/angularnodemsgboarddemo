// bring in express
var express = require('express');
// create express app
var app = express();

var messages = [{text:'some text', owner: 'Bob'}, {text: 'more text', owner: 'Jane'}];

// create generic route
app.get('/messages', (req, res) => {
    res.json(messages);
})

app.listen(1234);