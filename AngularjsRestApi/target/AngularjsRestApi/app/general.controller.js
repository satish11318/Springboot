angular.module("crudApp").controller("GeneralController", GeneralController);
GeneralController.inject = [ '$scope', 'Employee'];

//function starts here
function GeneralController($scope, Employee) {
	//coding begins here
	$scope.lat = '';
	$scope.lng = '';
	  
	$scope.employees = Employee.query();
		 
	$scope.employee = {};
	
	$scope.buttonText="Submit";
	
	$scope.categories = [
		  {id : 201901, name : "Pharmacy"},
		  {id : 201902, name : "Park"},
		  {id : 201903, name : "General Store"},
		  {id : 201904, name : "Kirana Store"},
		  {id : 201905, name : "House"},
		];
	//save
	$scope.saveEmployee = function() {
		$scope.employee.address = $('#employeeAddress').val();
		if ($scope.employee.id !== undefined) {
			Employee.update($scope.employee, function() {
				$scope.employees = Employee.query();
				$scope.employee = {};
				$scope.buttonText="Submit";
			});
		} else {
			Employee.save($scope.employee, function() {
				$scope.employees = Employee.query();
				$scope.employee = {};
			});
		}
	}
	
	//update
	$scope.updateEmployeeInit = function(employee) {
		$scope.buttonText="Update";
		$scope.employee = employee;
	}
	
	//delete
	$scope.deleteEmployee = function(employee) {
		employee.$delete({id: employee.id}, function() {
			$scope.employees = Employee.query();
		});
	}
}
