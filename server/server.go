package main

import (
	"net/http"
)

type Server struct {
	listenAddr string
}

func (server *Server) start() error {

	err := http.ListenAndServe(server.listenAddr, nil)

	//Define routes

	if err != nil {
		return err
	}

	return nil
}
