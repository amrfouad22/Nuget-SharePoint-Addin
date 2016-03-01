(function () {
    angular.module('CommentApp', [
    'ngRoute'
    ])
	.config(config);
    // Configure the routes.
    function config($routeProvider, $httpProvider, $locationProvider) {
        $routeProvider
			.when('/CommentApp.aspx', {
			    templateUrl: '../app/views/main.html',
			    controller: 'MainController',
			    controllerAs: 'main'
			})
			.otherwise({
			    redirectTo: '/CommentApp.aspx'
			});
        $locationProvider.html5Mode(true);
    };
})();