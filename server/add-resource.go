package main

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"strings"
	"time"
)

type Resource struct {
	Name        string `json:"name"`
	Link        string `json:"link"`
	LogoSrc     string `json:"logoSrc"`
	Description string `json:"description"`
	Tags        string `json:"tags"`
	Likes       int    `json:"likes"`
}

func (db *Database) addResource(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "*")
	defer r.Body.Close()
	if r.Method != "POST" {
		return
	}

	var resource Resource

	err := json.NewDecoder(r.Body).Decode(&resource)

	if err != nil {
		fmt.Println("Error decoding json")
	}

	collection := db.db.Database("dev-tools").Collection("Resources")

	if len(strings.TrimSpace(resource.Name)) == 0 {
		http.Error(w, "There were missing fields", http.StatusBadRequest)
	}

	//Having the context aid in cancellation 5 seconds after running the insert one query
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	_, err = collection.InsertOne(ctx, resource)
	if err != nil {
		fmt.Println(err)
		http.Error(w, "Error adding resource", http.StatusInternalServerError)
		return
	}

	w.WriteHeader(200)
	fmt.Fprintf(w, "Successfully added resource")
}
