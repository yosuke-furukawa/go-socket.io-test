var io = require('socket.io-client')
var url = 'http://localhost:5000';
var NUM = 1;

var sockets = [];
for (var i=0; i<NUM; i++) {
  var socket = io(url);
  socket.on('connect', function(){
    socket.on('echo', function(data){
      var d = JSON.parse(data);
      var now = Date.now();
      var rtt = now - d.date;
      console.log(rtt);
      socket.close();
    });
  });
  sockets.push(socket);
}
sockets.forEach(function(socket) {
    socket.emit("echo", JSON.stringify({date : Date.now()}));
});
