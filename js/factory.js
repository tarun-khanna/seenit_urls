app.factory("myFactory", function($q, $http) {
  return {
    apiCall: function() {
      console.log("inside factory....");
    }
  };
});
