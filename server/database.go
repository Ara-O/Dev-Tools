package main

import (
	"context"
	"fmt"
	"net/http"
	"os"
	"time"

	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type Database struct {
	db mongo.Client
}

type DatabaseInterface interface {
	start() error
	addResource(http.ResponseWriter, *http.Request)
	getResources(http.ResponseWriter, *http.Request)
}

func (d *Database) start() error {
	godotenv.Load()

	//Setting up mongo
	serverAPI := options.ServerAPI(options.ServerAPIVersion1)
	opts := options.Client().ApplyURI("mongodb+srv://ara:" + os.Getenv("MONGO_PASSWORD") + "@devcluster.dzfqlgb.mongodb.net/?retryWrites=true&w=majority").SetServerAPIOptions(serverAPI)

	ctx, cancel := context.WithTimeout(context.Background(), 20*time.Second)
	defer cancel()

	db, err := mongo.Connect(ctx, opts)
	if err != nil {
		panic(err)
	}

	// defer func() {
	// 	fmt.Println("disconnecting var")
	// 	if err = db.Disconnect(context.TODO()); err != nil {
	// 		panic(err)
	// 	}
	// }()

	d.db = *db
	fmt.Println("Database started successfully!")

	return nil
}
