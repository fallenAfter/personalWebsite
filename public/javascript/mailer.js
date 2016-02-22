//get submit button from form
var btn=document.getElementById('submit');
var formRes= document.getElementById('formRes');

// btn.addEventListener('click', function(evt){
// 	// prevent default form submission
// 	evt.preventDefault();

// 	//get form values and store in an array
// 	var formInfo= [document.getElementById('fName'),document.getElementById('lName'),document.getElementById('email'),document.getElementById('project')];
// 	//prepare get request
// 	aClient= new httpClient();
// 	aClient.get('http;//localhost:3000/send?fName='+formInfo[0]+'&lName='+formInfo[1]+'&email='+formInfo[2]+'&project='+formInfo[3], function(response){
// 		console.log(response);
// 	});
// });

//create function to manage a get query
// appropriated from comment by tggagne at stackoverflow.com/questions/247483/http-get-request-in-javascript
var httpClient = function(){
	this.get= function(aUrl, aCallback){
		anHttpRequest= new XMLHttpRequest();
		anHttpRequest.onreadystatechange= function(){
			if(anHttpRequest.readyState==4&&anHttpRequest.status==200){
				aCallback(anHttpRequest.responseText);
			}
			anHttpRequest.open("GET", aUrl, true);
			anHttpRequest.send(null);
		}
	}
}


