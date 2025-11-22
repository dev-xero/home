package main

import (
	"log"
	"math/rand"
	"net/http"

	"github.com/gin-gonic/gin"
)

var randomFacts = []string{
	"Neptune has only completed one full orbit since it was discovered.",
	"Saturn could theoretically float in your hot tub.",
	"Every century, Earth slows by 1/500th of a second.",
	"Gabriel's Horn has infinite surface area but finite volume.",
	"Cantor proved the infinity of Reals is larger than the Naturals.",
	"Neural Networks were inspired by gooey squids.",
	"Gradient descent is like going down a mountain blind.",
	"True computer randomness requires disturbance or atmospheric noise.",
	"Cleopatra lived closer to the iPhone than the Pyramids.",
	"Interestingly, chainsaws were invented for child birth, yikes.",
	"Our cells completely replaces itself roughly every decade.",
	"We share 60% of our DNA with a banana, think about that.",
	"Octopuses have blue blood.",
	"Your stomach acid can dissolve razor blades.",
	"Your brain uses 20% of your energy while being 2% your weight.",
	"Zeno's paradoxes proved motion is theoretically impossible.",
	"You should look up Gödel's incompleteness theorem.",
	"Don't you have something else to do?",
}

const (
	baseURL         = "https://sshxero.dev"
	metaTitle       = "ゼロ 地下 :: xero's underground"
	metaDescription = "- welcome, do have a nice stay -"
)

func main() {

	gin.SetMode(gin.ReleaseMode)
	log.Println("[xero]: server is running, listening for requests.")

	r := gin.Default()
	r.Static("/static", "./static")
	r.LoadHTMLGlob("templates/*")

	r.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", gin.H{
			"Title":                   metaTitle,
			"MetaPropertyTitle":       metaTitle,
			"MetaDescription":         metaDescription,
			"MetaPropertyDescription": metaDescription,
			"Slug":                    "",
			"RandomFact":              randomFacts[rand.Intn(len(randomFacts))],
		})
	})

	log.Println("[xero]: server is running on :8080")
	r.Run(":8080")
}
