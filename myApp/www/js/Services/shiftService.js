(function(){
  angular
    .module('Shiftr')
    .service('shiftService', function($resource, routeUrls){
      // return $resource(routeUrls.shiftApi);
      var ShiftApi = $resource(routeUrls.shiftApi);
      //console.log(ShiftApi)
      this.postShift = function(shift){
        console.log(shift);
        new ShiftApi(shift).$save(function(result){
          console.log(result);
        });
      };
    });
})();
