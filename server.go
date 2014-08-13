package main

import (
	"github.com/googollee/go-socket.io"
	"log"
	"net/http"
	"runtime"
)

func init() {
	log.Println(runtime.NumCPU())
	runtime.GOMAXPROCS(runtime.NumCPU())
}

func main() {
	server, err := socketio.NewServer(nil)
	if err != nil {
		log.Fatal(err)
	}
	server.On("connection", func(so socketio.Socket) {
		so.On("echo", func(msg string) {
			so.Emit("echo", msg)
		})
	})

	http.Handle("/socket.io/", server)
	http.ListenAndServe(":5000", nil)
}
