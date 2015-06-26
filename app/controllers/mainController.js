app.controller('mainController',controllerFn);

function controllerFn($scope,$state){

    function initController()
    {

        $scope.menuItems =
            [   {name:"Home",templateUrl:"app/partials/home.html"},
                {name:"Electronics",templateUrl:"app/partials/Electronics.html"},
                {name:"Apparel",templateUrl:"app/partials/apparel.html"},
                {name:"Kitchen",templateUrl:"app/partials/kitchen.html"},
                {name:"Sports",templateUrl:"app/partials/sports.html"},
                {name:"Toys",templateUrl:"app/partials/toys.html"}
            ];
        $scope.toys =
            [   {category:"Girls",type:"Barbie"},
                {category:"Girls",type:"Clothing"},
                {category:"Boys",type:"Cars"},
                {category:"Boys",type:"Avengers"},
                {category:"Boys",type:"HotWheel"}
            ];
        $scope.template ="app/partials/home.html";
    }

    $scope.loadPage = function(item){
        //$scope.template= item.templateUrl;
        $state.go(item.name.toLowerCase());
    };

    initController();
}