({
   
    handleRender : function(component, event, helper) {
       
        var action = component.get("c.getBaseDomain"); 
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
        		var returnValue = response.getReturnValue();
                
                component.set( 'v.baseDomain', returnValue);
            }
            else if (state === "INCOMPLETE") {
        
            }
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });

        
        $A.enqueueAction(action);
        component.set('v.queryStringParams','sfsasdgas'+component.get(' v.sendMessageData '));
        var vfOrigin = 'https://' + component.get(' v.baseDomain ');
        window.addEventListener("message", function(event){
            if(event.origin !== vfOrigin){
                
                return;
            }
            console.log(' 💥 ' + event.data);
            component.set( 'v.receiveMessageData', event.data);
        }, false);
        
    },
	sendDataToVFPage : function(component, event, helper) {
		//1. Get the message
		var message = component.get(' v.sendMessageData ');
		//2. Get the baseDomain
        var vfBaseDomain = "https://" + component.get(' v.baseDomain ');
		//3. Get the window
		var vfWindow = component.find('toVFPage').getElement().contentWindow;
		//4. Post the message
		vfWindow.postMessage(message, vfBaseDomain);
	}
})