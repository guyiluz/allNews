var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
const fs =require('fs')

server.listen(80);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    const news=   fs.readFileSync("./hadlines.json","utf8")
  


  socket.emit('news', news);
  socket.on('my other event', function (data) {
    console.log(data);

    
  });



  fs.watchFile("./hadlines.json", function() {
    
    console.log("just changed.");
  const news=   fs.readFileSync("./hadlines.json","utf8")
  console.log(news)
    socket.emit('news', news);
  });



});