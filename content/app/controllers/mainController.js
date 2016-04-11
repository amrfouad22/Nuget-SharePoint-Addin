(function () {
    angular
      .module('MyAngularApp')
      .controller('MainController', MainController);
   function MainController($http, $log,$rootScope,$location,$scope,dataSvc) {
       var vm = this;
       vm.data=dataSvc.getData();
    };
    
})();