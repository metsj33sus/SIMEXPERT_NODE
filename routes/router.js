const router = require("express").Router() 

router
	.get("/fassaaditood", function(req, res, next) {
		res.render("fassaaditood")
	})	 

module.exports = router