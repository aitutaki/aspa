var APP = angular.module('aspa', ['ngRoute', 'ui.bootstrap']).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: '/views/home.html',
    controller: 'homeController',
    controllerAs: 'vm'
  })
  .when('/products/:id', {
    templateUrl: '/views/productDetail.html',
    controller: 'productController',
    controllerAs: 'vm'
  })
  .when('/products', {
    templateUrl: '/views/products.html',
    controller: 'productsController',
    controllerAs: 'vm'
  })
  .otherwise({
    redirectTo: "/"
  });
  return $locationProvider.html5Mode(true).hashPrefix('!');
}]);
