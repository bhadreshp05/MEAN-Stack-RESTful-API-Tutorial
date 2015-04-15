var app = angular.module('contactList', []);

app.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
	
	$http.get('/contactlist')
		.success(function(response) {
			console.log('I got the data i requested')
			console.log('response', response);
			$scope.contactlist = response;
		});

}]);