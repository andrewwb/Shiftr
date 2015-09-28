(function(){
  angular
    .module('Shiftr')
    .controller('ShiftController', function($scope, shiftService){
      var self = $scope;

      self.AddShift = function(data){
        shiftService.postShift(data);
        // console.log('AddShift fired');
        console.log(data);
      };
    });
})();
