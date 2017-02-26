(function(){
	'use strict';
	angular.module('LunchCheck', []).controller('LunchCheckController', checkAmountC);
	checkAmountC.inject = ['$scope'];
	function checkAmountC($scope){
		$scope.foodItems = "";
		$scope.checkAmount = function (){
			var arrayOfFood = $scope.foodItems.split(',');
			if ($scope.foodItems == "") $scope.message = "Please enter data first";
			else if (arrayOfFood.length <= 3) $scope.message = "Enjoy";
			else if (arrayOfFood.length > 3) $scope.message = "Too much";	
		};	
	}
})();