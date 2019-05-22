({
	
	
    sendMessageToReceiver: function(component, event, helper) {
       // debugger;
       console.log('Initilize Event');
      
        var messageEvnt=component.getEvent('cmpEvent');
       
        messageEvnt.setParams({message:component.get('v.dataMessage')});
         
        console.log('Before Fire Event');
        messageEvnt.fire();
         console.log('After Fire Event');
	}
})