var app = require('express');
var http = require('http').Server(app);
console.log(http);

var io = require('socket.io')(http);

io.on('connection', function(socket){
    console.log('a user connected');
});


