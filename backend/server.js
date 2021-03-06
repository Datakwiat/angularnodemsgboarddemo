// bring in express
var express = require('express');
// create express app
var app = express();
var bodyParser = require('body-parser');

var messages = [{text:'some text', owner: 'Bob'}, {text: 'more text', owner: 'Jane'}];

// enable bodyParser middleware 
app.use(bodyParser.json());
// enables CORS custom middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

// use dedicated router for web apis
var api = express.Router();

// create generic route
api.get('/messages', (req, res) => {
    res.json(messages);
})

// post route
api.post('/messages', (req, res) => {
    console.log(req.body);
    messages.push(req.body);
    res.json(req.body);
})

app.use('/api', api);

app.listen(1234);