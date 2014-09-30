nexusApp.config(['$routeProvider', 
	function($routeProvider) {
		$routeProvider.
			when('/home', {
				templateUrl: 'dev/tpl/home.html',
				controller: 'homeCtrl'
			}).
			when('/add', {
				templateUrl: 'dev/tpl/add.html',
				controller: 'addCtrl'
			}).
			when('/search', {
				templateUrl: 'dev/tpl/search.html',
				controller: 'searchCtrl'
			}).
			otherwise({
				redirectTo: '/home'
			});
	}]);