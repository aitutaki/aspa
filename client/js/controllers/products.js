angular.module("aspa").controller("productsController", ["$scope", "$rootScope", "$location", "Products", function($scope, $rootScope, $location, Products) {
  var _this = this;
  this.data = [];

  // Privates
  function _init() {
    Products.getAll()
      .then(function(data) {
        _this.data = data || [];
      })
      .catch(function(){
        _this.data = [];
      });
  }

  // Publics
  this.openProduct = function(idx) {
    $location.path("/products/" + idx);
  };

  _init();
}]);
