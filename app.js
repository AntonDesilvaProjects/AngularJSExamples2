/**
 * 
 */
var app = angular.module('app', ['ngRoute', 'ngCookies']);
app.controller('LoginController', function($scope, $location, $cookies)
{
	$scope.message = "";
	$scope.validateUser = function(){
		if($scope.txtUsername == "admin" && $scope.txtPassword == "1234")
		{
			console.log("inside function");
			$cookies.userId = "admin";
			console.log( $cookies.userId);
			$location.path('/welcome');
		}
		else
			$scope.message = "Bad username or password!";
	}
});

app.controller('WelcomeController', function($scope, $cookies)
{
	$scope.data = $cookies.userId;
	$scope.items = [
	                {
	                  title: 'winter_in_london.jpg',
	                  filesize: 106180,
	                  tags: ['winter','london'],
	                  date: "2013-12-16T15:03:19.185"
	                },
	                {
	                  title: 'summer_in_hk.jpg',
	                  filesize: 106188,
	                  tags: ['summer','hk'],
	                  date: "2013-12-16T15:03:19.187"
	                }
	              ];
});

app.config(
	function($routeProvider)
	{
		$routeProvider.when('/login',
		{
			templateUrl: 'login.html',
			controller: 'LoginController'
		});
		$routeProvider.when('/welcome',
		{
			templateUrl: 'welcome.html'
		});
		$routeProvider.otherwise(
		{
			redirectTo: '/login'
		});
	}		
);