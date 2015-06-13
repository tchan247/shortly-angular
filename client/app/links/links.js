 (function(){


  angular.module('shortly.links', ['ngRoute'])
  //how do we grab all the LINKS

  .controller('LinksController', function ($scope, Links, $location) {
    // $location.path('/links');
    // do this <div ng-include="'app/links/links.html'"
    $scope.data = {};
    $scope.getLinks = function() {
      Links.getLinks().success(handleSuccess);
    };
    console.log(Links);

    // $scope.getLinks = function() {
    //   Links.getLinks()
    //   .then(function(data){
    //     $scope.data.links = data;
    //     console.log($scope.data.links);

    //   }).catch(function (error) {
    //     console.error(error);
    //   });
    // }

    // Your code here
    // // what functions are triggered on the view to interact with the Link model
    var handleSuccess = function(data) {

      $scope.data.links = data;
      console.log($scope.data.links);

    }

   $scope.getLinks();
    // Links.getLinks().success(handleSuccess);



  })


}());
