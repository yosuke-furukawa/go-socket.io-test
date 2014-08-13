var spawn = require('child_process').spawn;
var fs = require('fs');

var NUM = 10;

for(var i = 0; i<NUM; i++) {
  var sp = spawn("node", ['client.js']);
  sp.stdout.on("data", function(data){console.log("" + data)});
}

