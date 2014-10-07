nexusApp.config(['$routeProvider', '$locationProvider', 
	function($routeProvider, $locationProvider) {
//		$locationProvider.html5Mode(true);
//		$locationProvider.hashPrefix('!');
		$routeProvider.
			when('/home', {
				templateUrl: 'dev/tpl/home.html',
				controller: 'homeCtrl'
			}).
			when('/site', {
				templateUrl: 'dev/tpl/site.html',
				controller: 'siteCtrl'
			}).
			when('/3dgraphic', {
				templateUrl: 'dev/tpl/third.html',
				controller: 'thirdCtrl'
			}).
			when('/application', {
				templateUrl: 'dev/tpl/application.html',
				controller: 'applicationCtrl'
			}).
			when('/about', {
				templateUrl: 'dev/tpl/about.html',
				controller: 'aboutCtrl'
			}).
			otherwise({
				redirectTo: '/home'
			});
	}]);