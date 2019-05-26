({
    loadList : function(component) {
        var cc = component.getConcreteComponent();
       // cc.getDef().getHelper().preLoadProcess(cc);
    debugger;
        var action = component.get("c.getRecords"); 
        action.setParams({
            sObjectType: component.get("v.sObjectType"),
            fields: component.get("v.fields"),
            maxRows: component.get("v.maxRows")
        });
    
        action.setCallback(this, function(a) {
            if (a.getState() === "SUCCESS") {
                component.set("v.records", a.getReturnValue());
            } else if (a.getState() === "ERROR") {
                $A.log(a.getError());
            }
        });
    
        $A.enqueueAction(action); 
    }
})
