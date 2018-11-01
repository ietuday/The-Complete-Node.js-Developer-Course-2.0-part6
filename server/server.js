const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();


var server = http.createServer(app);
var io =socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', {
        from: 'John',
        text: 'See you then',
        cretedAt: 12312
    });

    socket.on('createMessage', (message) => {
        console.log('createMessage',message);
    });

    socket.on('disconnect', function () {
        console.log('User was Disconnected');
    });
})

server.listen(port, () => {
    console.log(`App is listnening to ${port}`);
});