var portfolioApp = angular.module('portfolioApp', []);

portfolioApp.controller('PortfolioList', function($scope){
	$scope.elements= [{
		'name': 'Jackie Jones'
	},
	{
		'name': 'Barrie Cycling Club'
	}];
});