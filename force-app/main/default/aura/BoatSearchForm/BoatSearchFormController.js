({
    doInit : function(component, event, helper) {
        ($A.get("e.force:createRecord"))?component.set('v.showNewButton',true):component.set('v.showNewButton',false);

        helper.getAllBoatTypesData(component, event, helper);

    },
    handleNewBoatCreation: function(component, event, helper) {
        
        helper.newBoatRecordCreation(component, event, helper);

    },
    onFormSubmit: function(component, event, helper) {
        var boatId=component.find('selectedBoatValueId').get('v.value');debugger;
        var appEvent=component.getEvent("formSubmit");
        //var appEvent = $A.get("e.c:FormSubmit");
        appEvent.setParams({
            formData:{boatTypeId:boatId }
        });
        appEvent.fire();
        

    }
})