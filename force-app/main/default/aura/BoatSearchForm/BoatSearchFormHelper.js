({
    getAllBoatTypesData : function(component, event, helper) {
        


        var action=component.get('c.getAllBoatTypes');
        action.setStorable();

        action.setCallback(this,function(response){
           
            if(response.getState()=='SUCCESS'){
               
                var boatTypeStrings=response.getReturnValue();
                var picklistValues=[];
                
                
                for (let i = 0; i < boatTypeStrings.length; i++){
                    var a=new Object();
                    a.Name=boatTypeStrings[i].Name;
                    a.Id=boatTypeStrings[i].Id;
                    picklistValues.push(a);
                }
                
                component.set('v.boatTypes',picklistValues);

            }else if(response.getState()=='ERROR'){

            }

        });
        $A.enqueueAction(action);

        //component.set('v.boatTypes',);

    },
    newBoatRecordCreation: function(component, event, helper) {
        
        var createBoatEvent=$A.get("e.force:createRecord");
        var boatTypeId=component.find('selectedBoatValueId').get('v.value');
        let params={
            "entityApiName": "Boat__c"

        } 
        if(boatTypeId){
            params['defaultFieldValues']={'BoatType__c':boatTypeId};
        }
        createBoatEvent.setParams(params);
        createBoatEvent.fire();


    }
})