(function () {
    angular.module('CommentApp', [
    'ngRoute'
    ])
	.config(config);
    // Configure the routes.
    function config($routeProvider, $httpProvider) {
        $routeProvider
			.when('/', {
			    templateUrl: '../app/views/main.html',
			    controller: 'MainController',
			    controllerAs: 'main'
			})
			.otherwise({
			    redirectTo: '/'
			});
    };
})();