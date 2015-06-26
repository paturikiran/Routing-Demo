app.controller('electronicsCtrl',electronicsFn);

function electronicsFn($scope,inventoryService){


    function initController(){
        $scope.categories = [
            {name:'Televisions'},
            {name:"Watches"},
            {name:"Speakers"},
            {name:"Laptop"},
            {name:"Mobile"},
            {name:"Camera"}
        ];
        $scope.products = inventoryService.getProducts();
    }

    initController();
}