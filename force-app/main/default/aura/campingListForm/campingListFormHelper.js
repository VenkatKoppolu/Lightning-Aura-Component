({
	createItem : function(component, event, helper) {
		  debugger;
       
        var expnse=component.getEvent('addItem');
        expnse.setParams({item:component.get('v.newItem')});
        expnse.fire();
    component.set('v.newItem',{sobjectType:'Camping_Item__c',Name:'',Quantity__c:'0',Price__c:'0.0'});
    }
})