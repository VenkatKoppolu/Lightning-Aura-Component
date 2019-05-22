({
	myAction : function(component, event, helper) {
		
	},doinit:function(component, event, helper){
        var action=component.get('c.getExpenses');
        action.setCallback(this,function(response){
            var state=response.getState();
            if(state=='SUCCESS'){
                component.set('v.expenses',response.getReturnValue())

            }else {
                console.log("Failed with state: " + state);
            }
        });

        $A.enqueueAction(action);

    },
    handleCreateExpense: function(component, event, helper) {
        var newExpense = event.getParam("expensesItemUpdate");
        helper.createExpense(component, newExpense);
    },

    handleUpdateExpense: function(component, event, helper) {
        var updatedExp = event.getParam("expensesItemUpdate");
        helper.updateExpense(component, updatedExp);
    }

})