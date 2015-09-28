// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var Shiftr = angular.module('Shiftr', ['ionic'])
  .run(function($ionicPlatform){
    $ionicPlatform.ready(function(){
          //stuff in here
    });
  })
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('index',{
        url: '/index',
        templateUrl: 'home.html'
      })
      .state('create', {
        url: '/create',
        templateUrl: 'Create.html',
        controller: 'ShiftController',
        controllerAs: 'self'
      });
      $urlRouterProvider.otherwise('/');
  });

// (function(){
//  angular
//  .module('Shiftr', ['ionic'])
//  .run(function($ionicPlatform){
//    $ionicPlatform.ready(function(){
//      //stuff in here
//    });
//  })
//  .config(function($stateProvider, $urlRouterProvider){
// $urlRouteProvider.otherwise('/');
//
//         $stateProvider
//           .state('index', {
//           url: '/',
//           // template: 'hello world',
//           templateUrl: 'home.html'
//         })
//         .state('create', {
//         url: '/create',
//         templateUrl: 'Create.html'
//       });
//     });
// })();



// angular.module('starter', ['ionic'])
//
// .run(function($ionicPlatform) {
//   $ionicPlatform.ready(function() {
//     // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//     // for form inputs)
//     if(window.cordova && window.cordova.plugins.Keyboard) {
//       cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//     }
//     if(window.StatusBar) {
//       StatusBar.styleDefault();
//     }
//   });
// })
