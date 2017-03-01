(function(){
	'use strict';
	
	var toBuy = [{
			name:"Cookies",
			quantity: 10
		},
		{
			name:"Banana",
			quantity: 12
		},
		{
			name:"Apple",
			quantity: 5
		},
		{
			name:"Maggi",
			quantity: 3
		},
		{
			name:"Milk Shake",
			quantity: 10
		}];
		
	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);
	
	ToBuyController.$inject=['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService){
		var toBuyList = this;
		toBuyList.list = ShoppingListCheckOffService.getToBuyItems();
		
		toBuyList.moveToBought = function(index){
			ShoppingListCheckOffService.moveToBought(index);
		};
	}
	
	AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService){
		var boughtList = this;
		boughtList.list = ShoppingListCheckOffService.getBoughtItems();
	}
	
	function ShoppingListCheckOffService(){
		var service = this;
		var toBuyItems = toBuy;
		var boughtItems = [];
		
		service.getToBuyItems = function(){
			return toBuyItems;
		};
		
		service.getBoughtItems =function(){
			return boughtItems;
		};
		
		service.moveToBought = function(index){
			boughtItems.push(toBuyItems[index]);
			toBuyItems.splice(index,1);
		};
	}
})();