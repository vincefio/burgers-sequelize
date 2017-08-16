var express = require("express");
var db = require('../models')
var router = express.Router();
var Burger = require("../models/burger");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  db.Burger.findAll({})
  	.then(function(dbPost){
  		var hbsObject = { burgers: dbPost };
    	res.render("index", hbsObject);
  	})
});

// post route -> back to index
router.post("/burgers/create", function(req, res) {
	db.Burger.create({
  	burger_name: req.body.burger_name,
  	devoured: false
  }).then(function() {
   res.redirect("/burgers")
  })
});

// put route -> back to index
router.put("/burgers/update", function(req, res) {
  db.Burger.update({
  	devoured: true
  },
 	{
 		where: {
 			id: req.body.burger_id
 		}
	}).then(function(){
		res.redirect("/burgers")
	})
})

module.exports = router;
