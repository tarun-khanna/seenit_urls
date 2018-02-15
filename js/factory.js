app.factory("myFactory", function($q, $http) {
  return {
    apiCall: function() {
      console.log("inside factory....");
      let deferedObj = $q.defer();

      var res = $http
        .get(
          "https://raw.githubusercontent.com/tarunraj95/Json_data/master/seenit_quests.json"
        )
        .then(
          data => {
            console.log("json recieved is=", data.data);
            deferedObj.resolve(data.data);
          },
          error => {
            deferedObj.reject(error);
          }
        );
      return deferedObj.promise;
    }
  };
});
