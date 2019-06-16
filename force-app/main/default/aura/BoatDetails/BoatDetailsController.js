({
    onBoatSelected : function(component, event, helper) {
        
        
        component.set('v.id',event.getParam("boat").Id);
        component.find("service").reloadRecord();
    },
    onBoatReviewAdded: function(component, event, helper) {
        component.set('v.selectedTabId',"boatreviewtab");
        //component.find("details").set("v.selectedTabId", "boatreviewtab");
        var boatReviewsCmp = component.find("boatReviewsCmp");
        console.log(boatReviewsCmp);
        var auraMethodResult = boatReviewsCmp.refresh();
        console.log("auraMethodResult: " + auraMethodResult);

    },
    onRecordUpdated : function(component, event, helper){
        //invoke a refresh on the reviews tab, calling public method refresh
        //boatReviewsCmp is the aura:id for the component when invoked in BoatDetails.cmp
        var boat = component.get("v.boat");
        console.log("onRecordUpdated called | boat: " + boat.Id);

        var boatReviewsCmp = component.find("boatReviewsCmp");
        console.log(boatReviewsCmp);
        var auraMethodResult = boatReviewsCmp.refresh();
        console.log("auraMethodResult: " + auraMethodResult);
}
})
