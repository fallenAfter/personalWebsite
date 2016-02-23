var express = require('express');
//attach nodemailer
var nodemailer= require('nodemailer');

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

router.get('/contact/mail', function(req,res,next){
	var url = req.query;
	console.log(url);
	//create test message
	var mailOptions= {
	  from: '"'+url.name+'"<'+url.email+'>',
	  to: 'brandon6elliott@gmail.com',
	  subject: url.name,
	  text:url.project
	}

	// configure smtp
	var smtpConfig={
	  host: 'smtp.gmail.com',
	  port: 465,
	  secure: true,
	  auth: {
	    user:'brandon6elliott@gmail.com',
	    pass: '***'
	  }
	};
	//create transporter
	var transporter = nodemailer.createTransport(smtpConfig);
	//check for errors in mailer
	transporter.verify(function(error, success) {
	   if (error) {
	        console.log(error);
	   } else {
	        console.log('Server is ready to take our messages');
	   }
	});

	//send test message
	  transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        return console.log(error);
	    }
	    console.log('Message sent: ' + info.response);
	});
	  res.redirect('/contact');
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
