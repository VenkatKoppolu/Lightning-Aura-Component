({
    onSearch : function(component, event, helper) {
        var action=component.get('c.getBoats');
        action.setParams({
            boatTypeId:component.get('v.boatTypeId')
        });
        action.setCallback(this,function(response){
            var status=response.getState();

            if(status=='SUCCESS'){
              //  console.log('@@'+typeOf(response.getReturnValue());
              try{
                component.set('v.boats',response.getReturnValue());
                //console.log('@@'+component.get('v.boatRecords'));
            }catch(ex){
                console.log(ex);
            }

            }else if(status=='ERROR'){

            }

        });
        $A.enqueueAction(action);

    }
})