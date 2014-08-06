function ListController($scope){
	$scope.showIncomes = true;
	$scope.showExpenses = false;

	$scope.toggleList = function(){
		$scope.showIncomes = !$scope.showIncomes;
		$scope.showExpenses = !$scope.showExpenses;

		$('#incomeTab').toggleClass('active');
		$('#expenseTab').toggleClass('active');
	};
}