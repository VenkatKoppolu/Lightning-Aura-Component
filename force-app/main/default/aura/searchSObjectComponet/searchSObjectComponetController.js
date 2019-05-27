({
    myAction : function(component, event, helper) {

    },
    doSearchOnKeyUp: function(component, event, helper) {
       helper.searchRecords(component, event, helper);


    },
    processingResponse: function (component, event, helper) {
       helper.onContactSelection(component, event);

    }
})
