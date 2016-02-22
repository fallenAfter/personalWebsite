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

router.get('/portfolio/barriecycling', function(req,res,next){
	res.render('item1', {
		"title": "Barrie Cycling Club",
		"imgURL": "/images/barriecycling.png",
		"imgALT": "image of barrie Cycling Club's initial view with navigation and full screen header video",
		"portfolioCopy": "Barrie cycling club is my first production website where my task was not to build a website but to modify a squarespace template so it could fit the clients needs. On thes site I wasworking with Squarespace and the Squarespace Developer platform to add extra elements across pages. This website brought a challenge as JSON Template is not widely used and the squarespace variation has no dedicated forums making it an exploration into the inner working of squarespace. much of this project was experimenting on element scopes and occurences when certain parts would be modified. Another challenge was to modify the nearly completed site without breaking the existing design. I had to make an integration that looked natural and comlete.",
		"gitHubAddr": "http://barriecycling.ca",
		"tags": ["portfolio", "school", "Wordpress", "real-estate", "jackie Jones"]
	});
	res.end();
});

router.get('/portfolio/jackiejones', function(req,res,next){
	res.render('item1', {
		"title": "Jackie Jones",
		"imgURL": "/images/jackieJones.png",
		"imgALT": "Image of Jackie jones website initial view with navigation and full screen header video",
		"portfolioCopy": "jackie Jones was an ongoing project for a local real-estate agent. Her need were to create a wordpress website that showed her off as being different from other local agents and to create distinction to her brand. I built this entire website with supervision from my boss where I had to identify capabilities of the theme selected by the client and create modern pages.",
		"gitHubAddr": "http://joneshomes.ca",
		"tags": ["portfolio", "school", "Wordpress", "real-estate", "jackie Jones"]
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
