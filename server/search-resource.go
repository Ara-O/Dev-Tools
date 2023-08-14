package main

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"

	"go.mongodb.org/mongo-driver/bson"
)

type Q struct {
	Query string `json:"query"`
}

func (db *Database) searchResource(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "*")

	if r.Method != "POST" {
		return
	}

	var query Q
	json.NewDecoder(r.Body).Decode(&query)

	filter := bson.M{"name": bson.M{
		"$regex":   "^" + query.Query,
		"$options": "i",
	}}

	collection := db.db.Database("dev-tools").Collection("Resources")
	cursor, err := collection.Find(context.TODO(), filter)

	if err != nil {
		fmt.Println("Error fetching resources")
	}

	defer cursor.Close(context.Background())

	var results []RetrievedResource
	if err := cursor.All(context.Background(), &results); err != nil {
		fmt.Println(err)
	}

	// for _, result := range results {
	// 	results = append(results, result)
	// }

	jsonResults, err := json.Marshal(results)

	if err != nil {
		fmt.Println("Error decoding json")
	}

	w.Write(jsonResults)

	defer r.Body.Close()
}
