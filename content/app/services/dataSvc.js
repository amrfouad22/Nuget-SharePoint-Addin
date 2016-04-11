(function () {
    angular.module('MyAngularApp')
        .factory('dataSvc', dataSvc);
    function dataSvc($http, $location, $log) {
        var service = {};
        service.getData=function(){
            return [
                {
                'name':'Amr Fouad',
                'twitter':'@amr_m_fouad' 
                },
                {
                'name':'John Smith',
                'twitter':'@JohnSmith' 
                }
            ];
        }
        return service;
    }
} ());