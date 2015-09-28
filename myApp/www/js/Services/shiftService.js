(function(){
  angular
    .module('Shiftr')
    .service('shiftService', function($resource, routeUrls){
      // return $resource(routeUrls.shiftApi);
      var ShiftApi = $resource(routeUrls.shiftApi);

      this.postShift = function(data){
        console.log(data);
        new ShiftApi(data).$save(function(data){
          console.log(data);
        });
      };
    });
})();
