(function () {
    angular
      .module('CommentApp')
      .controller('MainController', MainController);
   function MainController($http, $log,$rootScope,$location,$scope,commentSvc) {
       var vm = this;
       //the following 2 variables will be read from the SP context..
       vm.pageId='107';
       vm.currentUser = 'Amr Fouad';
       var baseUrl = $location.absUrl().substring(0, $location.absUrl().indexOf('SharePointApp2'))+'SharePointApp2';
       vm.addComment=function(){
           var newComment={};
           //newComment.CreatedBy=vm.currentUser;
           newComment.Created=(new Date()).toISOString();
           newComment.Comment1 = vm.newComment;
           newComment.PageID = vm.pageId;
           //item type
           newComment.__metadata = {type: "SP.Data.CommentListListItem"};
           vm.newComment='';  
           commentSvc.addComment(baseUrl, newComment, function (c) {
               vm.loadComments();
           });
       }
       vm.loadComments = function () {
           commentSvc.getComments(
                baseUrl,
                vm.pageId,
                function (comments) {
                    vm.comments = comments;
                    //trigger the digest loop
                    if (!$scope.$$phase) { $scope.$apply(); }
                },
                function (error) {
                    vm.comments = null;
                }
            );
       }
       $rootScope.$on('reply:add',function(event,comment){
           var newReply={};
           //newReply.CreatedBy=vm.currentUser;
           newReply.Created=(new Date()).toISOString();
           newReply.Comment1 = comment.newReply;
           newReply.ParentID = comment.ID;
           newReply.PageID = vm.pageId;
           newReply.__metadata = {type: "SP.Data.CommentListListItem"};
           comment.newReply='';
           commentSvc.addComment(baseUrl, newReply, function (c) {
               vm.loadComments();
           });
       });
    };
    
})();