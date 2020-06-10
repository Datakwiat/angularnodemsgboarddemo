// bring in express
var express = require('express');
// create express app
var app = express();
// create generic route
app.get('/', (req, res) => {
    res.send('hello');
})

app.listen(1234);