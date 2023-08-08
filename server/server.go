package main

import (
	"net/http"
)

type Server struct {
	listenAddr string
	database   DatabaseInterface
}

func (server *Server) start() error {

	_ = server.database.start()

	//Define routes
	http.HandleFunc("/api/add-resource", server.database.addResource)
	err := http.ListenAndServe(server.listenAddr, nil)

	if err != nil {
		return err
	}

	return nil
}
