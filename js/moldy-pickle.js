angular.module('moldy', ['ui.bootstrap']);
var MoldyCtrl = function ($scope) {

	$scope.multiplier = 0;

	$scope.$on('registerClick', function() {
		if($scope.multiplier > 0) {
			_gaq.push(['_trackEvent', 'Buttons', 'Click', 'Moldy Pickle']);
		} else {
			_gaq.push(['_trackEvent', 'Buttons', 'Click', 'Pickle']);
		}
	});
	
	$scope.images = [
	 {
	  "url": "img/pickle-large.jpg",
	  "opacity": 0,
	  "offset": -1
	 },
	 {
	  "url": "img/mold-1-large.png",
	  "opacity": 0.1,
	  "offset": 0
	 },
	 {
	  "url": "img/mold-2-large.png",
	  "opacity": 0.12,
	  "offset": 0.2
	 },
	 {
	  "url": "img/mold-3-large.png",
	  "opacity": 0.13,
	  "offset": 0.3
	 },
	 {
	  "url": "img/mold-4-large.png",
	  "opacity": 0.14,
	  "offset": 0.4
	 }
	];


};