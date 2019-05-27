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
    onContactSelection:function(component, event){
        var searchCompleteEvent = component.getEvent("searchComplete"); //this is the name used in register event

                searchCompleteEvent.setParams({
                    records: component.get('v.searchRecords')
                }).fire();
    }
})