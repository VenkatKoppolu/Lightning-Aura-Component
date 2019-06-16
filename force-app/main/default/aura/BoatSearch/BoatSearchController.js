({
    MyAction : function(component, event, helper) {
       
    },onFormSubmit : function(component, event, helper){
        console.log("event received by BoatSearchController.js");
        var formData = event.getParam("formData");
        var boatTypeId = formData.boatTypeId;
        var boatSearchResultsComponent = component.find("boatSearchResultsID");
        var auraMethodResult = boatSearchResultsComponent.search(boatTypeId);
        console.log("auraMethodResult: " + auraMethodResult);
    }
})