var app = angular.module('contactList', []);

app.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
	// Show list of contacts
	// Get Data
	var refresh = function() {
		$http.get('/contactlist')
		.success(function(response) {
			$scope.contactlist = response;
			$scope.contact = '';
		});
	};

	refresh();
	
	// Add contact
	// Post Data
	$scope.addContact = function() {
		// Grab input field values and send to server
		$http.post('/contactlist', $scope.contact)
			.success(function(response) {
				console.log('response', response);
				refresh();
			});
	};

	// Remove contact
	// Delete Data
	$scope.remove = function(id) {
		$http.delete('/contactlist/' + id)
			.success(function(response) {
				refresh();
			});
	};

	// Edit contact
	// Edit Data
	$scope.edit = function(id) {
		$http.get('/contactlist/' + id)
			.success(function(response) {
				$scope.contact = response;
			});
	}

	// Update Data
	// Update edited data
	$scope.update = function() {
		console.log($scope.contact._id);
		$http.put('/contactlist/' + $scope.contact._id, $scope.contact)
			.success(function(response) {
				refresh();
			});
	}

	// Clear data
	$scope.deselect = function() {
		$scope.contact = '';
	}
}]);