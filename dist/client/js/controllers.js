angular.module("aspa").controller("homeController", ["$scope", "$rootScope", "Basket", function($scope, $rootScope, Basket) {
  var _this = this;
  this.headline = "TRILANCO AngularJS Single Page App Template";

  this.addToBasket = function() {
    Basket.addToBasket();
  };
}]);

angular.module("aspa").controller("navController", ["$scope", "$rootScope", "$location", "Basket", function($scope, $rootScope, $location, Basket) {
  // No functionality here yet.
  
}]);

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
