(function(){
	Array.prototype.remove = function(index){
		this.splice(index, 1);
	};
})();

function ListController($scope){
	var self = this;

	$scope.showIncomes = true;
	$scope.showExpenses = false;
	$scope.editMode = false;
	$scope.selectedIndex = -1;

	$scope.incomes = [
		{name:'fakeThing', amount:'5'},
		{name:'other', amount:'5'},
		{name:'new', amount:'5'},
		{name:'wow', amount:'65'}
	];

	$scope.expenses = [
		{name:'fakeExpense', amount:'50'}
	];

	// Determine which tab is open.
	self.incomesTabOpen = function(){
		if($('#incomeTab').hasClass('active')){
			return true;
		}
		else{
			return false;
		}
	};

	$scope.toggleList = function(){
		$scope.showIncomes = !$scope.showIncomes;
		$scope.showExpenses = !$scope.showExpenses;

		$('#incomeTab').toggleClass('active');
		$('#expenseTab').toggleClass('active');
	};

	$scope.setEditMode = function(enabled){
		if(enabled){
			$scope.editMode = true;
		}
		else{
			$scope.editMode = false;
		}

		if($scope.selectedIndex != -1){
			$previousElement = $elements.eq($scope.selectedIndex);
			$previousElement.animate({
				height:'34px',
			}, 200);
		}

		$scope.selectedIndex = -1;
	}

	$scope.saveItem = function(){
		if(self.incomesTabOpen()){
			var $nameElement = $('#incomeName');
			var $amountElement = $('#incomeAmount');

			var localname = $nameElement.val();
			var localamount = $amountElement.val();

			$scope.incomes.push({name:localname, amount:localamount});

			$nameElement.val('');
			$amountElement.val('');
		}
		else{
			var $nameElement = $('#expenseName');
			var $amountElement = $('#expenseAmount');

			var localname = $nameElement.val();
			var localamount = $amountElement.val();

			$scope.expenses.push({name:localname, amount:localamount});

			$nameElement.val('');
			$amountElement.val('');
		}

		$scope.editMode = false;
	};

	$scope.selectItem = function($index){
		$scope.editMode = false;
		var tab = '#incomes ';
		if(!self.incomesTabOpen()){
			tab = '#expenses ';
		}

		$elements = $(tab + ' .list-item');
		$element = $elements.eq($index);

		if($scope.selectedIndex != -1){
			$previousElement = $elements.eq($scope.selectedIndex);
			$previousElement.animate({
				height:'34px',
			}, 200);
		}

		$element.animate({
			height:'50px',
		}, 200);

		$scope.selectedIndex = $index;
	};

	$scope.deleteItem = function(){
		if($scope.selectedIndex == -1){
			return;
		}

		if(self.incomesTabOpen()){
			$scope.incomes.remove($scope.selectedIndex);
		}
		else{
			$scope.expenses.remove($scope.selectedIndex);
		}

		$scope.reset();
	};

	$scope.reset = function(){
		if($scope.selectedIndex != -1){
			$previousElement = $elements.eq($scope.selectedIndex);
			$previousElement.animate({
				height:'34px',
			}, 200);
		}

		$scope.editMode = false;		
		$scope.selectedIndex = -1;
	}
}