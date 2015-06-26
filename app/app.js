var app=angular.module('amazon',['ui.router']);

app.config(function($stateProvider,$urlRouterProvider){

    $urlRouterProvider.otherwise("/home");
    var home = {name:"home",templateUrl:"app/partials/home.html",url:"#home"};
    var electronics = {name:"electronics",templateUrl:"app/partials/electronics.html",url:"#electronics"};
    var apparel = {name:"apparel",templateUrl:"app/partials/apparel.html",url:"#apparel"};
    var kitchen = {name:"kitchen",templateUrl:"app/partials/kitchen.html",url:"#kitchen"};
    var sports = {name:"sports",templateUrl:"app/partials/sports.html",url:"#sports"};
    var toys = {name:"toys",templateUrl:"app/partials/toys.html",url:"#toys"};
    $stateProvider.state('home',home);
    $stateProvider.state('electronics',electronics);
    $stateProvider.state('sports',sports);
    $stateProvider.state('toys',toys);
    $stateProvider.state('apparel',apparel);
    $stateProvider.state('kitchen',kitchen);
});

