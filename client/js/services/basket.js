angular.module("aspa").factory("Basket", ["$q", function($q) {
  var _qty = 0;

  function _getBasketQty() {
    return _qty;
  }

  function _addToBasket() {
    _qty++;
    return _qty;
  }

  return {
    getBasketQty: _getBasketQty,
    addToBasket: _addToBasket
  };
}]);
