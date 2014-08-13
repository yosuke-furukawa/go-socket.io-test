go-socket.io vs socket.io benchmark
===================================

setup go-socket.io server
-------------------------

```
$ go get
```

setup socket.io server
-------------------------

```
$ npm install
```

run go-socket.io server
--------------------------

```
$ go run server.go
```


run socket.io server
--------------------------

```
$ node server.js
```

run 1 client
--------------------------

```
$ node client.js
```

if you would like to change the number of emits, change NUM variable in client.js.


run 10 client
--------------------------

```
$ node multi_clients.js
```

if you would like to change the number of clients, change NUM variable in multi_clients.

