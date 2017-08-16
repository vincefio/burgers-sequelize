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
  	// var hbsObject = { burgers: dbPost };
   //  res.render("index", hbsObject);
   res.redirect("/burgers")
  })
});

// put route -> back to index
router.put("/burgers/update", function(req, res) {
  // burger.update(req.body.burger_id, function(result) {
  //   // wrapper for orm.js that using MySQL update callback will return a log to console,
  //   // render back to index with handle
  //   console.log(result);
  //   res.redirect("/");
  // });

 
});

module.exports = router;
