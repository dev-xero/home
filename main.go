package main

import (
	"log"
	"math/rand"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	randomFacts := []string{
		"The moon is actually shaped like a lemon.",
		"Neptune has only completed one full orbit since it was discovered.",
		"Saturn could theoretically float in your hot tub.",
		"Every century, Earth slows by 1/500th of a second.",
		"Gabriel's Horn has infinite surface area but finite volume.",
		"Cantor proved the infinity of Reals is larger than the Naturals.",
		"Neural Networks were inspired by gooey squids.",
		"Gradient descent is like descending a mountain blind folded.",
		"True computer randomness requires disturbance or atmospheric noise.",
		"Cleopatra lived closer to the iPhone than the Pyramids.",
		"Interestingly, chainsaws were invented for child birth, yikes.",
		"Our bodies completely replaces itself roughly every decade.",
		"We share 60% of our DNA with a banana, think about that.",
		"Octopuses have blue blood.",
		"Your stomach acid can dissolve razor blades.",
		"Your brain uses 20% of your energy while being 2% your weight.",
		"Zeno's paradoxes proved motion is theoretically impossible.",
		"Gödel shows that a sufficiently complex system cannot prove itself.",
	}

	gin.SetMode(gin.ReleaseMode)
	log.Println("[xero]: server is running, listening for requests.")

	r := gin.Default()
	r.Static("/static", "./static")
	r.LoadHTMLGlob("templates/*")

	r.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", gin.H{
			"Title":      "ゼロ 地下 (xero's underground)",
			"Slug":       "",
			"RandomFact": randomFacts[rand.Intn(len(randomFacts))],
		})
	})

	r.Run()
}
