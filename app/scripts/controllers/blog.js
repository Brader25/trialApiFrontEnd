'use strict';
angular.module('trialFrontEndApp')
  .controller('BlogCtrl', BlogCtrl)

function BlogCtrl(getBlogPosts, $http) {
  var vm = this;
  vm.blogPost = [];
  vm.newBlogPost = {
    content: '',
    authorName: '',
  };
  vm.addBlogPost = addBlogPost;
  
  function addBlogPost(newPost) {
    $http({
      url: 'http://berickson-001-site1.ctempurl.com/api/blogposts',
      method: "POST",
      data: newPost
    })
      .then(function (response) {
        vm.blogPost.push(response.data);
        vm.newBlogPost = {};
        alert("Succefully added Post!")
      },
      function (response) {
        console.log("failed");
      });
  }
}
