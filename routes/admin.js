var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//add required models
var Portfolio = require('../models/portfolio');

router.get('/', function(req,res,next){
	Portfolio.find(function(err,portfolio){
		if(err){
			console.log(err);
			res.end(err);
		}
		res.render('admin/index', {
			title: 'Admin',
			portfolio: portfolio
		});
	});
});

router.get('/add', function(req,res,next){
	res.render('admin/add', {
		title: "Add Portfolio Item"
	});
});

router.post('/add', function(req,res,next){
	Portfolio.create({
		title: req.body.title,
		pageUrl: req.body.pageUrl,
		description: req.body.desc,
		gitHub: req.body.git,
		url: req.body.url,
		img: ""
	});
	res.redirect('/admin');
});
router.get('/edit/:id', function(req,res,next){
	var id = req.params.id;
	Portfolio.findById(id, function(err, portfolio){
		if(err){
			console.log(err);
			res.end(err);
		}
		res.render('admin/edit', {
			title: 'Edit',
			portfolio: portfolio
		});
	});
});

router.post('/edit/:id', function(req,res,render){
	var id = req.params.id;
	var portfolio = new Portfolio({
		_id: id,
		title: req.body.title,
		pageUrl: req.body.pageUrl,
		description: req.body.desc,
		gitHub: req.body.git,
		url: req.body.url,
		img: ""
	});
	Portfolio.update({ _id: id}, portfolio, function(err){
		if(err){
			console.log(err);
			res.end(err);
		}
		res.redirect('/admin');
	});
});

router.get('/delete/:id', function(req,res,next){
	var id = req.params.id;
	Portfolio.remove({ _id: id}, function(err){
		if(err){
			console.log(err);
			res.end(err);
		}
		console.log('removed entry');
		res.redirect('/admin');
	});
});

module.exports = router;