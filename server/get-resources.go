package main

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type RetrievedResource struct {
	ID          primitive.ObjectID `json:"_id" bson:"_id, omitempty"`
	Name        string             `json:"name"`
	Link        string             `json:"link"`
	LogoSrc     string             `json:"logoSrc"`
	Description string             `json:"description"`
	Tags        string             `json:"tags"`
	Likes       int                `json:"likes"`
}

func (db *Database) getResources(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "*")

	if r.Method != "GET" {
		return
	}

	collection := db.db.Database("dev-tools").Collection("Resources")

	resources, err := collection.Find(context.Background(), bson.D{})
	defer resources.Close(context.Background())
	if err != nil {
		fmt.Println(resources)
	}

	var allResources []RetrievedResource

	for resources.Next(context.Background()) {
		var resource RetrievedResource
		if err := resources.Decode(&resource); err != nil {
			fmt.Println(err)
		}

		allResources = append(allResources, resource)
	}

	data, err := json.Marshal(allResources)

	if err != nil {
		fmt.Println(err)
	}

	w.Write(data)
}
