var express = require('express');
//add mongoose
var mongoose = require('mongoose');
//attach nodemailer
var nodemailer= require('nodemailer');
//get models
var Portfolio = require('../models/portfolio');
//import smtp cnfiguration file
var smtpConfig = require("../config/smtp");

var router = express.Router();

// variables for portfolio page
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Brandon Elliott' });
});
//create route for Portfoli page
router.get('/portfolio', function(req,res,next){
	Portfolio.find(function(error,portfolio){
		if(error){
			console.log(error);
			res.end(error);
		}
		res.render('portfolio',{
			title: 'Brandon Elliott | Portfolio',
			portfolio: portfolio
		});
	});
	
	
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
router.get('/portfolio/:pageUrl', function(req,res,next){
	var pageUrl = req.params.pageUrl;
	Portfolio.find({pageUrl: pageUrl}, function(err, portfolio){
		res.render('item1', {
			title: portfolio[0].title,
			portfolio: portfolio[0]
		})
	})
})

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

router.get('/about', function(req,res,next){
	res.render('about', {'title': 'about'});
	res.end();
});
router.get('/contact',function(req,res,next){
	res.render('contact',{"title": "Contact"});
	res.end();
});
module.exports = router;
