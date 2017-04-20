;var app = angular.module('app', ['ngRoute']);


app.config(['$routeProvider', function($routeProvider) {

	path = '/test/handbook/pages/';
	cat1 = 'list1/';
	cat2 = 'list2/';	

	// Меню и основная маршрутизация
	$routeProvider
		.when('/list1', {
			template: '<div ng-list1></div>'
		})
		.when('/list2', {
			template: '<div ng-list2></div>'
		})
		.when('/list3', {
			template: '<div ng-list3></div>'
		})
		.when('/list4', {
			template: '<div ng-list4></div>'
		})
		.when('/main', {
			template: '<div ng-list-main></div>'
		})
		.otherwise({
			// redirectTo: '/',			
			template: '<div ng-list-main></div>'
		});

	// <div ng-return-to-list1></div>
	// Маршрутизация по статьям
	$routeProvider
		.when('/1', {
			templateUrl: path + cat1 + 'art1.html'
		})
		.when('/2', {
			templateUrl: path + cat1 + 'art2.html'
		})
		.when('/3', {
			templateUrl: path + cat1 + 'art3.html'
		})
		.when('/4', {
			templateUrl: path + cat1 + 'art4.html'
		})
		.when('/5', {
			templateUrl: path + cat1 + 'art5.html'
		})
		.when('/6', {
			templateUrl: path + cat1 + 'art6.html'
		});

	// Второй блок статей
	$routeProvider
		.when('/11', {
			templateUrl: path + cat2 + 'art11.html'
		})

	// Тестовые штуки
	$routeProvider
		// .when('/', {
		// 	template: '<div ng-list-main></div><div ng-view></div>'
		// })
		// .when('/index.html', {
		// 	template: '<div ng-list-main></div><div ng-view></div>'
		// })
		// .when('/1', {
		// 	template: '<div ng-text></div>'
		// })
		.when('/3', {
			templateUrl: 'block3.html'
		})
		.when('/texts/:textId', {
			templateUrl: 'texts.html',
			controller: 'TextCtrl'
		});
}]);