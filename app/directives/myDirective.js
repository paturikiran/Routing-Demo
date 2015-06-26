/**
 * Created by aalap on 6/23/2015.
 */

app.directive('myDirective',function(){
    return{
      restrict:"AE",
        templateUrl:"app/partials/electronics.html"
      //template:"Hello Guys Welcome to the directives"
    };
});