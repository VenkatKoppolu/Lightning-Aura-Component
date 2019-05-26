({
    navigateToRecord : function(component, event, helper) {    
        helper.navigateToRecord(component,event.target.getAttribute("data-recId"));
    },
    handleDeleteRecord : function(component, event, helper) {
        helper.deleteRecordHandler(component,event);
    }
})