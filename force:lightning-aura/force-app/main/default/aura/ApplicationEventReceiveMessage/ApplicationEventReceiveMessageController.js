({
	handleRecieveMessage : function(component, event, helper) {
		
        component.set('v.setMsg',event.getParam("message"));
	}
})