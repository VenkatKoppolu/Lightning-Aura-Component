({
    searchRecords: function (component, event, helper) {
        debugger;
        var records;
        var action = component.get('c.searchSobjectRecords');
        action.setParams({
            SObjectInfo: component.get('v.sObjectInfo'),
            SearchText: component.find('enter-search').get('v.value')
        });
        action.setCallback(this, function (response) {
            if (response.getState() == 'SUCCESS') {
                records = response.getReturnValue();
                var searchCompleteEvent = component.getEvent("searchComplete"); //this is the name used in register event

                searchCompleteEvent.setParams({
                    records: records
                }).fire();

            } else if (response.getState() == 'ERROR') {

            }

        });
        $A.enqueueAction(action);





    }
})