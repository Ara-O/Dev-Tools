package main

import (
	"fmt"
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
	http.HandleFunc("/api/get-resources", server.database.getResources)
	http.HandleFunc("/api/update-likes", server.database.updateLikes)

	//health
	http.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, "Helthi")
	})
	err := http.ListenAndServe(server.listenAddr, nil)

	if err != nil {
		return err
	}

	return nil
}
