'use strict';
angular.module('trialFrontEndApp')
  .factory('getBlogPosts',getBlogPosts)

   function getBlogPosts ($http) {
 return {
    getBlogPostList: getBlogPostList
  };

  function getBlogPostList() {
        return $http.get('http://berickson-001-site1.ctempurl.com/api/blogposts')
            .then(getBlogComplete);

        function getBlogComplete(response) {
            return response.data;
        }
    }
  };