package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type Resource struct {
	Name        string `json:"name"`
	Link        string `json:"link"`
	Id          int    `json:"id"`
	LogoSrc     string `json:"logoSrc"`
	Description string `json:"description"`
	Tags        string `json:"tags"`
}

func (db *Database) addResource(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "*")

	if r.Method != "POST" {
		return
	}

	var resource Resource

	json.NewDecoder(r.Body).Decode(&resource)
	fmt.Printf("%+v", resource)
}
