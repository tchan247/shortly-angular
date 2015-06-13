 (function(){


  angular.module('shortly.links', ['ngRoute'])
  //how do we grab all the LINKS

  .controller('LinksController', function ($scope, Links, $location, Auth) {

    $scope.data = {};
    // $scope.getLinks = function() {
    //   Links.getLinks().success(handleSuccess);
    // };
    console.log(Links);

    $scope.getLinks = function() {
      console.log("calling getLInks")
      if(Auth.isAuth()) {
        console.log("we are authorized")
        Links.getLinks()
        .then(function(data){
          console.log(data.data);

          data.data.sort(function(a, b){
            return a.visits < b.visits
          });

          $scope.data.links = data.data;
          //console.log($scope.data.links);

        }).catch(function (error) {
          console.error(error);
        });
      } else {
        console.log("UNAUTHORIZED")
        $location.path('/signin');
      }

    }

    $scope.signOut = function() {
      console.log("Signing OUT")
      Auth.signout();
    }





  })


}());
