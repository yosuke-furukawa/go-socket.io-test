var io = require('socket.io')();
io.on('connection', function(socket){
  socket.on("echo", function(data) {
    socket.emit("echo", data);
  });
});
io.listen(5000);
