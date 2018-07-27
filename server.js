
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var poems = require('./routes/poems.router.js');
var port = process.env.PORT || 3001;

console.log('server'); 

app.use(express.static('client/build'));

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


/** ---------- EXPRESS ROUTES ---------- **/
app.use('/poems', poems);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});
