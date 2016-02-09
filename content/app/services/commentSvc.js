(function () {
    angular.module('CommentApp')
        .factory('commentSvc', commentSvc);
    function commentSvc($http, $location, $log) {
        var service = {};
        //comment service functions abstraction layer with SP
        //load the comments
        service.getComments = function (pageId, success, error) {
           //var baseUrl = $location.absUrl().substring(0, $location.absUrl().indexOf('CommentApp'));
           var comments=JSON.parse(
               '{  \
                   "comments": \
                   [  {\
                            "text": "Hello there Please comment your name",\
                            "username": "John Smith",\
                            "image": "",\
                            "datetime": "15 Jan 2016 14:00",\
                            "replies": [\
                                {\
                                "text": "My name is Mark",\
                                "username": "Mark Ahmed",\
                                "image": "",\
                                "datetime": "10 June 2016 14:00",\
                                "replies": [\
                                    {\
                                    "text": "Hello Mark thanks for commenting ",\
                                    "username": "John Smith",\
                                    "image": "",\
                                    "datetime": "15 Jan 2016 14:00"\
                                    }\
                                ]\
                                }\
                                ,\
                                {\
                                "text": "My name is Amr",\
                                "username": "Amr Fouad",\
                                "image": "",\
                                "datetime": "10 June 2016 14:00",\
                                "replies": [\
                                    {\
                                    "text": "Hello Amr thanks for commenting ",\
                                    "username": "John Smith",\
                                    "image": "",\
                                    "datetime": "15 Jan 2016 14:00"\
                                    }\
                                ]\
                                }\
                            ] \
                            }\
                        ]\
                        }'
           );
           success(comments);
        }
        //add new comment/reply
        service.addComment = function (comment,callback) {
            callback(comment);
                
        }
        service.addReply=function(reply,callback){
            callback(reply);
        }
        return service;
    }
} ());