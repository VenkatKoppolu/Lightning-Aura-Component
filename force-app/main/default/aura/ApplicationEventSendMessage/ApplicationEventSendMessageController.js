({
	sendMessageFromSender : function(component, event, helper) {
        var msg=component.get('v.mesg');
        var appEvent=$A.get('e.c:ApplicationEventMessage');
        appEvent.setParams({'message':msg});
        appEvent.fire();
		
	}
})