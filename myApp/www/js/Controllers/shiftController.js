(function(){
  angular
    .module('Shiftr')
    .controller('ShiftController', function($state){
      var self = this;
      self.AddShift = function(data){
        console.log('AddShift fired');
        console.log(data);
      };
    });
})();
