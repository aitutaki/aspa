angular.module("aspa").controller("homeController", ["$scope", "$rootScope", "Basket", function($scope, $rootScope, Basket) {
  var _this = this;
  this.headline = "TRILANCO AngularJS Single Page App Template";

  this.addToBasket = function() {
    Basket.addToBasket();
  };
}]);
