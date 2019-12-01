var config = require('./config');
var express = require('express');
var app = express();

app.use('/public', express.static(__dirname+'/public'));

app.get('/', (arg, res, next)=>{
    res.sendFile(__dirname+'/index.html');
})

app.listen(3000);