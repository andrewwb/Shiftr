(function(){
  angular
    .module('Shiftr')
    .service('shiftService', function($resource, routeUrls){
      // return $resource(routeUrls.shiftApi);
      var ShiftApi = $resource(routeUrls.shiftApi);
      //console.log(ShiftApi)
      this.postShift = function(data){
        console.log(data);
        new ShiftApi(data).$save(function(result){
          console.log(result);
        });
      };
    });
})();
