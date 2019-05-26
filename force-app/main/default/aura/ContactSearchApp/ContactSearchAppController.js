({
    myAction : function(component, event, helper) {

    },
    handleContactSearchComplete : function(component, event, helper) {
        debugger;
        component.set("v.appContacts", event.getParam("records"));
    }
        
})
