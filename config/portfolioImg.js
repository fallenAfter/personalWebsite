//configure server for uploading portfolio images
var multer = require('multer');

//storage options for multer
var coverStorage = multer.diskStorage({
	destination: function(req,file,callback){
		callback(null, './public/images/portfolio');
	},
	filename: function(req,file,callback){
		callback(null, Date.now()+'-'+file.originalname);
	}
}, function(err){
	if(err){
		console.log(err);
		res.end(err);
	}
});

module.exports = multer({storage:coverStorage}).single('img');
