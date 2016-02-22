var express = require('express');
var router = express.Router();

var portfolioItem = {
		"title": "Item1",
		"imgURL": "/images/snowFootPrint.jpg",
		"imgALT": "This is the main image here",
		"portfolioCopy": "Hello World",
		"gitHubAddr": "http://github.com",
		"tags": ["portfolio", "school", "Node"]
	}

// variables for portfolio page
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Brandon Elliott' });
});
//create route for Portfoli page
router.get('/portfolio', function(req,res,next){
	res.render('portfolio',{title: 'Brandon Elliott | Portfolio'});
});

router.get('/item1', function(req,res,next){
	res.render('item1', {
		"title": "Item1",
		"imgURL": "/images/snowFootPrint.jpg",
		"imgALT": "This is the main image here",
		"portfolioCopy": "Hello World",
		"gitHubAddr": "http://github.com",
		"tags": ["portfolio", "school", "Node"]
	});
});

for(var counter;counter<portfolioItem.length;counter++){

}

module.exports = router;
