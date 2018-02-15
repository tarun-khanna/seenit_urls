app.controller("myController", function($scope, myFactory) {
  console.log("inside controller...");
  $scope.list = "list of latest seenit URLS";
  let res = myFactory.apiCall();
  res.then(function(data) {
    $scope.quests = data;
  });
});
