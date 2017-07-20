define(function (require) {

	var module = require('ui/modules').get('kibana/sdk', ['kibana']);

	module.controller('sdkController', function ($scope, $element, Private) {
		  var myField = "";
	  	  $scope.$watch('esResponse', function(resp) {
		    if (!resp) {
		      $scope.myField = null;
		      return;
		    }
		   });

		   //$scope.myField = $scope.vis.params.myField;
	});
});
