angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.newLink = {};
  $scope.addThisLink = { title: "HELLO" };
  $scope.recentLength = 0;

  $scope.postLink = function() {

    Links.postLink($scope.newLink)
    .then(function(){
      console.log("adding url: " + JSON.stringify($scope.newLink));
      // $scope.recentLinks.push($scope.newLink);
      $scope.newLink = {};
      //$location.path('/links');
      //console.log("new link: ", $scope.newLink);
      //console.log("recent link: ", $scope.recentLinks);

    })
    .catch(function (error) {
      console.error(error);
    });
    //add view below. or redirect to all links
    $scope.getRecentLinks = function() {
      Links.getLinks()
      .then(function(data){
        if(data.data.length > $scope.recentlength) {

          $scope.recentLength = data.data.length;
          var addThisLink = data.data[$scope.recentLength-1];

          $scope.recentLinks.push();
        }

      }).catch(function (error) {
        console.error(error);
      });
    }
    ///call function to addUrl to Server DB.
  };



});
