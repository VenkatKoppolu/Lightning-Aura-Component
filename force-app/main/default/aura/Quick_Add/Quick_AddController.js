({
	myAction : function(component, event, helper) {
	},
	handleAdd : function(component, event, helper) {
		debugger;
		var n1=component.find('num1').get('v.value');
		var n2=component.find('num2').get('v.value');
		var resulttoast=$A.get('e.force:showToast');
        resulttoast.setParams({'title':'Quick Add: '+n1+'+'+n2,
                               'message':'The Total is '+(n1+n2)+'.'
                              });
        resulttoast.fire(); 
        
        
        //used to close the quick action window
        var dismissActionPanel = $A.get("e.force:closeQuickAction");
dismissActionPanel.fire();


	}
})