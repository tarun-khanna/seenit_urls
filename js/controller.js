app.controller("myController", function($scope, myFactory) {
  console.log("inside controller...");
  $scope.list = "this is the list";
  myFactory.apiCall();
});
