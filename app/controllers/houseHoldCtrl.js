app.controller('houseHoldCtrl',houseHoldCtrlFn);

function houseHoldCtrlFn($scope,houseHoldService){

    function initController(){

        $scope.products = houseHoldService.getProducts();
    }
    initController();
}