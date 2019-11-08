angular.module("crudApp").controller("SearchController", SearchController);
SearchController.inject = [ '$scope', 'Employee' ];

//function starts here
function SearchController($scope, Employee) {
	//coding begins here
	$scope.employees = Employee.query();
}
