angular.module("myApp",[])
.controller("mainController", function($scope){
	
	$scope.isHoliday = false;

	$scope.checkHoliday = function( day ){

		if( day === "sunday" ){
			$scope.isHoliday = true;
		}
		else{
			$scope.isHoliday = false;
		}
	}
})