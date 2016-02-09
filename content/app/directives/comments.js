(function () {
    angular.module('CommentApp')
        .directive('comments', ['$templateCache', '$compile', '$http', '$log','$rootScope','commentSvc', function ($templateCache, $compile, $http, $log,$rootScope,commentSvc) {
            var definition = {
                restrict: 'E',
                replace: true,
                scope: {
                    pageId: '@',                    //filter out the comment to a specific page
                    template: '@',                  //directive display template.
                    comments:'='                    //comments passed to the directive.
                }
            };
            definition.link = function postLink(scope, element) {
                scope.$watch('pageId', function () {
                    compile();
                });
                var compile = function () {
                    $http.get(scope.template, { cache: $templateCache }).success(function (html) {
                        element.html(html);
                        $compile(element.contents())(scope);
                    });
                }; 
                scope.showReply=function(comment){
                     comment.bReply=true;
                }           
                scope.hideReply=function(comment){
                    comment.bReply=false;
                    comment.newReply='';
                }    
                scope.addReply=function(comment){
                    comment.bReply=false;
                    $rootScope.$emit('reply:add',comment);
                }   
            };
            return definition;
        }]);
})();