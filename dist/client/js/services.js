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

angular.module("aspa").factory("Products", ["$q", function($q) {
  // Dummy data
  var data = [
    { code: "11111", description: "Wellington Boots"},
    { code: "22222", description: "Rain Coats"}
  ];

  function _getAll() {
    // This would be an AJAX call, but let's just shim the promise
    var def = $q.defer();
    def.resolve(data);
    return def.promise;
  }

  function _getOne(idx) {
    var def = $q.defer();
    def.resolve(data[idx]);
    return def.promise;
  }

  return {
    getAll: _getAll,
    getOne: _getOne
  };
}]);
