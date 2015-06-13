angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.newLink = {};

  $scope.postLink = function(link) {
    Links.postLink($scope.newLink)
    .then(function(){
      console.log("adding url");
      console.log($scope.newLink);
      $location.path('/links');

    })
    .catch(function (error) {
      console.error(error);
    });
    //add view below. or redirect to all links


    ///call function to addUrl to Server DB.
  };



});
