({
	myAction : function(component, event, helper) {
		
	},
    receiverMessageFromSender: function(component, event, helper) {
        console.log('Receiver 1');
		component.set('v.receiveData',event.getParam('message'));
        console.log('Receiver 2');
	}
})