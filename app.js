(function(){
  angular.module('My First App',[])
  .controller('MyFirstController',function($scope){
    $scope.name="Vigneshwar";
    $scope.Value=0;
    $scope.sayHello=function(){
      return "Hello World";
    };

    $scope.displayNumeric=function(){
      var totalCalcValue=calculateAscii($scope.name);
      $scope.Value=totalCalcValue;

    };
    function calculateAscii(string){
      var totalgetValue=0;
      for(var i=0;i<string.length;i++){
        totalgetValue +=string.charCodeAt(i);
      }
      return totalgetValue;
    }

  });

})();
