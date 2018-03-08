const express = require("express")
const bodyParser = require("body-parser")
const siteRoutes = require("./routes/router")
const db = require("./db")

const staticAssets = __dirname + "/public";


express()
	.set("view engine", "hjs")
  	.use(bodyParser.json())
  	.use(bodyParser.urlencoded({extended: false}))
  	.use(siteRoutes)
	.use(express.static(staticAssets))

	.get("/", function(req, res, next) {
		res.render("index")
	}) 

	.post('/', function(req, res, next){
	    var email = req.body.email
	    var password = req.body.password
	    console.log('Email sent from frontend is: ', email)
	    console.log('Password sent from frontend is: ', password)
	    res.redirect("/")
	})



	.listen(3000)