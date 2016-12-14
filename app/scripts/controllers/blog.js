'use strict';
angular.module('trialFrontEndApp')
  .controller('BlogCtrl', BlogCtrl)

BlogCtrl.$inject = ['getBlogPosts', '$http'];
function BlogCtrl(getBlogPosts, $http) {
  var vm = this;
  vm.blogPost = [];
  vm.newBlogPost = {
    content: '',
    authorName: '',
  };
  vm.addBlogPost = addBlogPost;
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
      })
  }

  function addBlogPost(newPost) {
    $http({
      url: 'http://berickson-001-site1.ctempurl.com/api/blogposts',
      method: "POST",
      data: newPost
    })
      .then(function (response) {
        vm.blogPost.push(response.data);
      },
      function (response) {
        console.log("failed");
      });
  }
}
