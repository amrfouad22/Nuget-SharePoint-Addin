(function () {
    angular.module('MyAngularApp', [
    'ngRoute'
    ])
	.config(config);
    // Configure the routes.
    function config($routeProvider, $httpProvider, $locationProvider) {
        $routeProvider
			.when('/MyApp.aspx', {
			    templateUrl: '../app/views/main.html',
			    controller: 'MainController',
			    controllerAs: 'main'
			})
			.otherwise({
			    redirectTo: '/MyApp.aspx'
			});
        $locationProvider.html5Mode(true);
    };
})();