({
    searchRecords: function (component) {
        
        var records;
        var action = component.get('c.searchSobjectRecords');
        action.setParams({
            SObjectInfo: component.get('v.sObjectInfo'),
            SearchText: component.find('enter-search').get('v.value')
        });
        action.setCallback(this, function (response) {
            if (response.getState() == 'SUCCESS') {
                records = response.getReturnValue();
                component.set('v.searchRecords',records);

            } else if (response.getState() == 'ERROR') {

            }

        });
        $A.enqueueAction(action);





    },
    onRecordSelection:function(component, event){
        if(component.get('v.sObjectInfo')=='Contact'){
        var searchCompleteEvent = component.getEvent("searchComplete"); //this is the name used in register event

                searchCompleteEvent.setParams({
                    records: component.get('v.searchRecords')
                }).fire();
        }
        else if(component.get('v.sObjectInfo')=='Account'){
            // Get the application event by using the
        // e.<namespace>.<event> syntax
        var appEvent = $A.get("e.c:SearchApplicationEvent");
        appEvent.setParams({
            records: component.get('v.searchRecords') 
        });
        appEvent.fire();
        }
    }
})