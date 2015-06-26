app.controller('apparelCtrl',apparelFn);

function apparelFn($scope,clothingService){
	function initController(){
		$scope.products = clothingService.getProducts();
    }	
	initController();
}



