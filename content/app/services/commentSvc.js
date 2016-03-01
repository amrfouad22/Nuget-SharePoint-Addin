(function () {
    angular.module('CommentApp')
        .factory('commentSvc', commentSvc);
    function commentSvc($http, $location, $log) {
        var service = {};
        //comment service functions abstraction layer with SP
        //load the comments
        service.getComments = function (baseUrl,pageId, success, error) {
            GetItemsREST(baseUrl, 'CommentList', '$filter=PageID eq \''+pageId+'\'', function (comments) {
                success(comments);
            });
        }
        //add new comment/reply
        service.addComment = function (baseUrl,comment, callback) {
            //save the new Item to the comment list
            GetDigest(baseUrl, function (d) {
                AddItemREST(baseUrl, 'CommentList', comment, d, function (d) {
                    callback(d);
                });
            });
        }
        service.addReply=function(reply,callback){
            callback(reply);
        }
        service.getUserProps = function (baseUrl, callback) {
            $.ajax({
                url: baseUrl + "/_api/SP.UserProfiles.PeopleManager/GetMyProperties?$select=PictureUrl,DisplayName,AccountName,Email",
                method: "GET",
                headers: { "Accept": "application/json; odata=verbose" },
                success: function (data) {
                    callback(data)
                },
                error: function (data, errorCode, errorMessage) {
                    console.log(errorMessage)
                }
            });
        }
        return service;
    }

    function GetItemsREST(baseUrl,listName, query, callback) {
       
        var RESTUrl = baseUrl + "/_api/web/lists/GetByTitle('" + listName + "')/items?" + query;
        $.ajax(
                    {
                        url: RESTUrl,
                        method: "GET",
                        headers: {
                            "accept": "application/json; odata=verbose",
                        },
                        success: function (data) {
                            if (data.d.results.length > 0) {
                                //render the data
                                callback(data.d.results);
                            }
                        },
                        error: function (err) {
                        },
                    }
                );
    }
    function AddItemREST(baseUrl, listName, object,digest, callback) {
        var RESTUrl = baseUrl + "/_api/web/lists/GetByTitle('" + listName + "')/items";
        $.ajax(
                {
                    url: RESTUrl,
                    method: "POST",
                    data:JSON.stringify(object),
                    headers: {
                        "X-RequestDigest":digest,
                        'Accept': 'application/json; odata=verbose',
                        'Content-Type': 'application/json; odata=verbose'
                    },
                    success: function (data) {
                            callback();
                    },
                    error: function (err) {
                    },
                }
            );
    }
    function GetDigest(baseUrl,callback) {
        $.ajax({
            url: baseUrl + "/_api/contextinfo",
            method: "POST",
            headers: { "Accept": "application/json; odata=verbose" },
            success: function (data) {
                callback(data.d.GetContextWebInformation.FormDigestValue)
            },
            error: function (data, errorCode, errorMessage) {
                console.log(errorMessage)
            }
        });
    }
} ());