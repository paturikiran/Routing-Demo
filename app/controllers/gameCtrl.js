app.controller(sportsCtrl, sportsCtrlFn());

function gameCtrlFn($scope, gameService){

	function initController(){
		$scope.products=gameService.getProducts();
	}	
		initController();
}
