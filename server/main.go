package main

import "log"

func main() {
	server := Server{
		listenAddr: ":8080",
	}

	err := server.start()

	if err != nil {
		log.Fatal("There was an error starting the server")
	}
}
