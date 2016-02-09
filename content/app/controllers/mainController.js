(function () {
    angular
      .module('CommentApp')
      .controller('MainController', MainController);
   function MainController($http, $log,$rootScope,commentSvc) {
       var vm = this;
       //the following 2 variables will be read from the SP context..
       vm.pageId='107';
       vm.currentUser='Amr Fouad';
       //load the comments file from dummy json files
       (function init() {
            commentSvc.getComments(
                vm.pageId,
                function(comments){
                    vm.comments=comments
                },
                function(error){
                    vm.comments=null;
                }
            );
       })();
       vm.addComment=function(){
           var newComment={};
           newComment.username=vm.currentUser;
           newComment.datetime=(new Date()).toLocaleString();
           newComment.text=vm.newComment; 
           vm.newComment='';  
           commentSvc.addComment(newComment,function(c){
               vm.comments.push(c);
           });       
       }
       $rootScope.$on('reply:add',function(event,comment){
           var newReply={};
           newReply.username=vm.currentUser;
           newReply.datetime=(new Date()).toLocaleString();
           newReply.text=comment.newReply;
           comment.newReply='';
           commentSvc.addReply(newReply,function(c){
               if(!comment.replies){
                comment.replies=[];
               }
               comment.replies.push(newReply);
           })          
       });
       
    };
    
})();