describe("mainController",function(){
	beforeEach(module("myApp"));

	var $controller;
	 beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

	describe("$scope.checkHoliday",function(){
		it("checks for holiday",function(){
		var $scope = {};
  		var controller = $controller('mainController', { $scope: $scope });
      	
      	$scope.checkHoliday("sunday");	
		expect($scope.isHoliday).toBeTruthy();
	})
	})
	
})	