app.controller('appListController', function ListController($scope, $http) {

    $http.get('data.json').then(function(data) {
       $scope.jsonData = data;
    });


    $scope.title = '';

    // $scope.return = '..';
    $scope.return = 'main';
    $scope.main = 'main';
    
});



app.controller('TextCtrl', function ($scope, $routeParams){

	console.log('TextCtrl');
	console.log($routeParams.textId);

});

