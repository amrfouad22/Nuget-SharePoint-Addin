(function () {
    angular.module('CommentApp')
        .directive('comments', ['$templateCache', '$compile', '$http', '$log','$rootScope','commentSvc', function ($templateCache, $compile, $http, $log,$rootScope,commentSvc) {
            var definition = {
                restrict: 'E',
                replace: true,
                scope: {
                    pageId: '=',                    //filter out the comment to a specific page
                    template: '@',                  //directive display template.
                    comments: '=',                  //comments passed to the directive.
                    parentId:'='                    //parent item id , for the root level it will be empty string
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
                //filter the replies based on the parent id and current page id from current scope.
                scope.replies = function (item) {
                    return item.ParentID == scope.parentId && item.PageID == scope.pageId;
                }
            };
            return definition;
        }]);
})();