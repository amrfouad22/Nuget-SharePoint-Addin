(function () {
    angular.module('MyAngularApp')
        .directive('mydirective', ['$templateCache', '$compile', '$http', '$log','$rootScope','dataSvc', function ($templateCache, $compile, $http, $log,$rootScope,dataSvc) {
            var definition = {
                restrict: 'E',
                replace: true,
                scope: {
                    template: '@',                  //directive display template.
                    data:'='                        //data passed from controller.
                }
            };
            definition.link = function postLink(scope, element) {
                scope.$watch('template', function () {
                    compile();
                });
                var compile = function () {
                    $http.get(scope.template, { cache: $templateCache }).success(function (html) {
                        element.html(html);
                        $compile(element.contents())(scope);
                    });
                }; 
            };
            return definition;
        }]);
})();