var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  // 
  // For any unmatched url, redirect to /categorized
  //$urlRouterProvider.otherwise("/categorized");
  // 
  // Now set up the states 
  $stateProvider
    .state('allinventory', {
      url: "/allinventory",
      templateUrl: "template.allinventory.html"
    })
    .state('categorized', {
      url: "/categorized",
      templateUrl: "template.categorized.html",
    });
   
});

app.factory('List', function($http){
	var List = {};
	List.getList = function(){
		return $http.get('/api/inventory');
	}
	List.addToList = function(newFurniture){
		return $http.post('/api/inventory', newFurniture);
	}
	return List;
});


app.controller('ListCtrl', function($scope, List){
	$scope.data = {};
	List.getList()
	.then(function(results){
		$scope.data.list = results.data;
		console.log(results)
		$scope.chair = {
			count: 0,
			data: {}
		}
		$scope.sofa = {
			count: 0,
			data: {}
		}
		$scope.coffeetable = {
			count: 0,
			data: {}
		}
		for (var i = 0; i < results.data.length; i++){
			if(results.data[i].category === "Chair"){
				$scope.chair.data = results.data[i];
				$scope.chair.count ++;
			}
			if(results.data[i].category === "Sofa"){
				$scope.sofa.data = results.data[i];
				$scope.sofa.count ++;
			}
			if(results.data[i].category === "Coffee Table"){
				$scope.coffeetable.data = results.data[i];
				$scope.coffeetable.count ++;
			}

		}
	})
	$scope.addFurniture = function(newFurniture){
		$scope.added = {};
		List.addToList(newFurniture)
		.then(function(response){
			$scope.added = newFurniture.data;
			console.log("in listctrl post results", response.data);
			$scope.data.list.push(newFurniture);
		})
	}
})