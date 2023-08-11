package main

import (
	"context"
	"encoding/json"
	"fmt"
	"math"
	"net/http"
	"strconv"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo/options"
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

type ReturnData struct {
	Resources  []RetrievedResource `json:"resources"`
	NumOfPages int                 `json:"num_of_pages"`
}

type RequestData struct {
	Page int `json:"page"`
}

func (db *Database) getResources(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "*")

	const PAGE_LIMIT = 10

	if r.Method != "GET" {
		return
	}

	var requestData RequestData

	json.NewDecoder(r.Body).Decode(&requestData)
	defer r.Body.Close()

	requestedPage := r.URL.Query().Get("page")

	if requestedPage == "" {
		requestedPage = "1"
	}

	collection := db.db.Database("dev-tools").Collection("Resources")

	skip, _ := strconv.ParseInt(requestedPage, 10, 64)
	resources, err := collection.Find(context.Background(), bson.D{}, options.Find().SetLimit(PAGE_LIMIT).SetSkip(PAGE_LIMIT*(skip-1)))
	defer resources.Close(context.Background())

	if err != nil {
		fmt.Println(err)
	}

	//Get number of resources
	opts := options.Count().SetHint("_id_")
	count, err := collection.CountDocuments(context.TODO(), bson.D{}, opts)
	if err != nil {
		panic(err)
	}

	numberOfResources := math.Ceil(float64(count) / float64(PAGE_LIMIT))
	var allResources []RetrievedResource

	for resources.Next(context.Background()) {
		var resource RetrievedResource
		if err := resources.Decode(&resource); err != nil {
			fmt.Println(err)
		}

		allResources = append(allResources, resource)
	}

	// data, err := json.Marshal(allResources)

	returnData := ReturnData{
		Resources:  allResources,
		NumOfPages: int(numberOfResources),
	}

	returnDataJSON, err := json.Marshal(returnData)

	if err != nil {
		fmt.Println("There was an error parsing the JSON")
	}

	w.Write(returnDataJSON)
}
