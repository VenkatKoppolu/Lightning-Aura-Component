({
    navigateToRecord : function(component,recordId) {
        
        var navEvnt=$A.get('e.force:navigateToSObject');
        navEvnt.setParams({
            'recordId':recordId

        });
        navEvnt.fire();

    },
    deleteRecordHandler: function(component,event){
        debugger;
        var recordId=event.target.getAttribute("data-recId");
        var aar=component.get('v.records');
       
        console.log(aar);
        var action=component.get('c.deleteRecord');
        action.setParams({'recordId':recordId});
        action.setCallback(this,function(a){
            if (a.getState() === "SUCCESS") {
                aar=aar.filter(item => item.Id !== recordId)
                component.set('v.records',aar);
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "title": "Success!",
                    "message": "The record has been deleted successfully."
                });
                toastEvent.fire();
            } else if (a.getState() === "ERROR") {
                $A.log(a.getError());
            }

        });
        $A.enqueueAction(action);
      
       // console.log(component.get('v.records'));

    }
})
