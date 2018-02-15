app.controller("myController", function($scope, myFactory) {
  console.log("inside controller...");
  $scope.list = "this is the list";
  let res = myFactory.apiCall();
  res.then(function(data) {
    console.log("data recieved in controller is =", data);
  });
});
