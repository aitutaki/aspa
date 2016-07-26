angular.module("aspa")
.directive("basket", function() {
  return {
    scope: {},
    restrict: "E",
    bindToController: {
      prefix: "@"
    },
    controller: function(Basket) {
      this.getBasketQty = function() {
        return Basket.getBasketQty();
      };
    },
    controllerAs: 'vmBasket',
    templateUrl: '/views/basket.html'
  };
});
