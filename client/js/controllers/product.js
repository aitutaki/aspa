angular.module("aspa").controller("productController", ["$scope", "$rootScope", "$routeParams", "Products", function($scope, $rootScope, $routeParams, Products) {
  var _this = this;
  var _id = $routeParams.id;
  this.data = {};

  // Privates
  function _init() {
    Products.getOne(_id)
      .then(function(data) {
        _this.data = data || {};
      })
      .catch(function(){
        alert("Cannot lookup product!");
        _this.data = {};
      });
  }

  _init();
}]);
