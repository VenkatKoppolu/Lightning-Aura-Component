({
    doinit : function(component, event, helper) {
        
       helper.onSearch(component, event, helper);

    },
   /* doSearch: function(component, event, helper) {
        component.set("v.boatTypeId", event.getParam("formData").boatTypeId);
        
        helper.onSearch(component, event, helper);
 
    },*/
     onBoatSelect: function(component, event, helper) {
         component.set('v.selectedBoatId',event.getParam('boatId'));
 
     },
     search: function(component, event, helper){
        console.log("BSRController: search called");
        var params = event.getParam('arguments');
        console.log("boatTypeId extracted: " + params.boatTypeId);
        component.set("v.boatTypeId", params.boatTypeId);
        helper.onSearch(component);
        return "search complete.";
    },
})