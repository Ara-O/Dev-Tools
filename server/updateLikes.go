package main

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type UpdateLikesStruct struct {
	ID    string `json:"_id"`
	Likes int    `json:"likes"`
}

func (db *Database) updateLikes(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "*")

	if r.Method != "POST" {
		return
	}

	collection := db.db.Database("dev-tools").Collection("Resources")
	var updatedVals UpdateLikesStruct

	json.NewDecoder(r.Body).Decode(&updatedVals)

	id, _ := primitive.ObjectIDFromHex(updatedVals.ID)
	filter := bson.D{{"_id", id}}

	update := bson.D{{"$set", bson.D{{"likes", updatedVals.Likes}}}}

	_, err := collection.UpdateOne(context.TODO(), filter, update)

	if err != nil {
		fmt.Println("There was an error updating likes")
		http.Error(w, "There was an error updating the likes", http.StatusInternalServerError)
		return
	}

}
