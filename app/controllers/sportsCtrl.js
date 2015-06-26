app.controller('sportsCtrl', sportsCtrlFn);

function sportsCtrlFn($scope,gameService){

	function initController(){
		$scope.products=gameService.getProducts();
	}	
		initController();
}
