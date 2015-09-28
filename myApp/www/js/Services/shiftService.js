(function(){
  angular
    .module('Shiftr')
    .service('shiftService', function($resource, routeUrls){
      var self = this;
      var ShiftApi = $resource(routeUrls.shiftApi)

    });
})();
