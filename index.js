var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();

var http = require('http');
var server = http.createServer(app);

app.use(express.static('client'));

var io = require('socket.io')(server);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
  });

server.listen(process.env.PORT || PORT, () => {
    console.log('listning on 3000');
});

