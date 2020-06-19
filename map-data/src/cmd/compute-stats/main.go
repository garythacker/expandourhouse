package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"os"

	"expandourhouse.com/mapdata/congresses"
	"expandourhouse.com/mapdata/housedb"
)

/*
For each Congress:
	- # reps
	- Mean # of voters in regular districts
*/

func main() {
	log.SetOutput(os.Stderr)
	ctx := context.Background()

	// connect to DB
	db := housedb.Connect(ctx)
	defer db.Close()

	data := make(map[string]map[string]interface{})
	for _, cong := range congresses.GetAll() {
		stats := make(map[string]interface{})
		nbrReps := db.NbrReps(ctx, cong.Number)
		if nbrReps > 10 { // weed out implausible numbers
			stats["nbrReps"] = nbrReps
		}
		meanVoters := db.MeanVotersPerRegDistrict(ctx, cong.Number)
		if meanVoters != nil {
			stats["voters"] = meanVoters
		}
		data[fmt.Sprintf("%v", cong.Number)] = stats
	}

	os.Stdout.WriteString("/* Generated by compute-stats */\nconst A = ")
	enc := json.NewEncoder(os.Stdout)
	if err := enc.Encode(data); err != nil {
		panic(err)
	}
	os.Stdout.WriteString(";\nexport default A;\n")
}