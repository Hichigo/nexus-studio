var nexusCtrl = angular.module('nexusCtrl', []);

nexusCtrl.controller('homeCtrl', ['$location', '$scope',
	function($location, $scope) {
		
}])
.controller('siteCtrl', ['$location', '$scope',
	function($location, $scope) {
		
}]).controller('thirdCtrl', ['$location', '$scope',
	function($location, $scope) {
		
}]).controller('applicationCtrl', ['$location', '$scope',
	function($location, $scope) {
		
}])
.controller('aboutCtrl', ['$location', '$scope',
	function($location, $scope) {
		$scope.labels = ['Ваше имя', 'Ваш E-mail', 'Ваш номер (необязательно)'];
		$scope.social = [
			{
				id: 'twitter',
				xlink: '#twitter',
				url: '#',
			},
			{
				id: 'google',
				xlink: '#google',
				url: 'https://plus.google.com/u/0/116298012878227766967/about',
			},
			{
				id: 'facebook',
				xlink: '#facebook',
				url: 'https://www.facebook.com/nexus.studio.bel/timeline#',
			},
			{
				id: 'vk',
				xlink: '#vk',
				url: 'http://vk.com/nexusstudioru',
			},
			{
				id: 'youtube',
				xlink: '#youtube',
				url: 'http://www.youtube.com/channel/UCbWoURkJ5nXueJQjWpXEraA?guided_help_flow=3',
			}
		];
}]);
