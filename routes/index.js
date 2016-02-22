var express = require('express');
var router = express.Router();
var portfolioItem = {
		"pName0": {
			"title": "item1",
			"imgURL": "/images/snowFootPrint.jpg",
			"imgALT": "This is the main image here",
			"portfolioCopy": "Hello World",
			"gitHubAddr": "http://github.com",
			"tags": ["portfolio", "school", "Node"]
		}
	};

// variables for portfolio page
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Brandon Elliott' });
});
//create route for Portfoli page
router.get('/portfolio', function(req,res,next){
	res.render('portfolio',{title: 'Brandon Elliott | Portfolio'});
	res.end();
});

router.get('/portfolio/item1', function(req,res,next){
	res.render('item1', {
		"title": "Item1",
		"imgURL": "/images/snowFootPrint.jpg",
		"imgALT": "This is the main image here",
		"portfolioCopy": "Hello World",
		"gitHubAddr": "http://github.com",
		"tags": ["portfolio", "school", "Node"]
	});
	res.end();
});
// for(var counter=0;counter<Object.keys(portfolioItem).length;counter++){
// 	router.get('/portfolio/'+portfolioItem['pName'+counter]['title'], function(req,res,next){
// 		console.log(portfolioItem['pName'+counter]['title']);
	
// 		res.render('item1', portfolioItem['pName'+counter]);
// 	});
// }
router.get('/about', function(req,res,next){
	res.render('about', {'title': 'about'});
	res.end();
});
router.get('/services',function(req,res,next){
	res.render('services',{"title": "Services"});
	res.end();
});
router.get('/contact',function(req,res,next){
	res.render('contact',{"title": "Contact"});
	res.end();
});
module.exports = router;
