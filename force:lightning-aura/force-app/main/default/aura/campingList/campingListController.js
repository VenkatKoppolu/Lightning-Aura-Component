({
  myAction: function (component, event, helper) {

  }, 
    myAction2: function (component, event, helper) {

  },
  doinit: function (component, event, helper) {
    var action = component.get('c.getItems');
    action.setCallback(this, function (response) {
      if (response.getState() == 'SUCCESS') {
        component.set('v.items', response.getReturnValue());
      }

    });
    $A.enqueueAction(action);
  },
  handleAddItem: function (component, event, helper) {
      var action=component.get('c.saveItem');
		action.setParams({
			'item':item
		});
		action.setCallback(this,function(response){
			if(response.getState()=='SUCCESS'){
				var campingItems=component.get('v.items');
          campingItems.push(response.getReturnValue());
		  component.set('v.items',campingItems);
		 

			}
		});
		$A.enqueueAction(action);
   
      helper.createItem(component, event.getParam('item'));

    }

 
})