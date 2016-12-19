'use strict';
angular.module('trialFrontEndApp')
  .controller('ViewblogCtrl', ViewblogCtrl);

function ViewblogCtrl(getBlogPosts, $http) {
  var vm = this;
  vm.blogPost = [];
  vm.deletePost = deletePost;
  activate();

  function activate() {
    return getBlogPost().then(function () {
      console.log('done');
    });
  }

  function getBlogPost() {
    return getBlogPosts.getBlogPostList()
      .then(function (data) {
        vm.blogPost = data;
        return vm.blogPost;
      });
  }

    function deletePost(post) {
    $http({
      method: 'DELETE',
      url: 'http://berickson-001-site1.ctempurl.com/api/blogposts/' + post.blogPostId
    })
      .then(function (response) {
        vm.blogPost = getBlogPost();
      }, function (rejection) {
        console.log(rejection.data);
      });
  }
}