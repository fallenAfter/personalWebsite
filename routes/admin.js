var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var multer = require('multer');
var passport = require('passport');
//add required models
var Portfolio = require('../models/portfolio');
var Account = require('../models/accounts');
//add config for file upload
var uplodeCover = require('../config/portfolioImg');

//serialize user information
passport.serializeUser(function(user, done){
	done(null, user.id);
});
passport.deserializeUser(function(id, done){
	Account.findById(id, function(err, user){
		done(err, user);
	});
});


router.get('/', isAuth, function(req,res,next){
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

router.get('/login', function(req,res,next){
	res.render('admin/login', {
		title: 'Login'
	});
});
router.post('/login', passport.authenticate('local', {
	successRedirect: '/admin',
	failureRedirect: '/admin/login',
	failureMessage: 'Invalid Login'

}))

router.get('/register', function(req,res,next){
	res.render('admin/register', {
		title: 'Register'
	});
});
router.post('/register', function(req,res,next){
	Account.register(new Account({ username: req.body.username}), req.body.password, function(err, account){
		if(err){
			console.log(err);
			return res.render('admin/register', {
				title: 'register'
			});
		}
		else{
			req.login(account, function(err){
				res.redirect('/admin');
			});
		}
	});
})

router.get('/add', isAuth, function(req,res,next){
	res.render('admin/add', {
		title: "Add Portfolio Item"
	});
});

router.post('/add', isAuth, function(req,res,next){
	if(req.body){
		console.log('image present');
		uplodeCover(req,res,function(err){
			if(err){
				console.log(err);
				res.end(err);
			}
			else{
				console.log(req.file.filename);
				console.log(req.body);
				var img = req.file.filename;
				console.log('creating model');
				Portfolio.create({
					title: req.body.title,
					pageUrl: req.body.pageUrl,
					description: req.body.desc,
					gitHub: req.body.git,
					url: req.body.url,
					img: img
				});
			res.redirect('/admin');
			}
		});
		
	}
	
	
});
router.get('/edit/:id', isAuth, function(req,res,next){
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

router.post('/edit/:id', isAuth, function(req,res,render){
	var id = req.params.id;
	console.log('image uplode is: '+req.body.img+'!');
	if(req.body.img!=''){
		uplodeCover(req,res,function(err){
			if(err){
				console.log(err);
				res.end(err);
			}
			else{
				var img = req.file.filename;
				var portfolio = new Portfolio({
					_id: id,
					title: req.body.title,
					pageUrl: req.body.pageUrl,
					description: req.body.desc,
					gitHub: req.body.git,
					url: req.body.url,
					img: img
				});
				Portfolio.update({ _id: id}, portfolio, function(err){
					if(err){
						console.log(err);
						res.end(err);
					}
					res.redirect('/admin');
				});
			}
		});
	}
	else{
		var portfolio = new Portfolio({
			_id: id,
			title: req.body.title,
			pageUrl: req.body.pageUrl,
			description: req.body.desc,
			gitHub: req.body.git,
			url: req.body.url,
		});
		Portfolio.update({ _id: id}, portfolio, function(err){
			if(err){
				console.log(err);
				res.end(err);
			}
			res.redirect('/admin');
		});
	}
	
});

router.get('/delete/:id', isAuth, function(req,res,next){
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

//auth check
function isAuth(req,res,next){
	if(req.isAuthenticated()){
		return next();
	}
	else{
		res.redirect('/admin/login');
	}
}

module.exports = router;