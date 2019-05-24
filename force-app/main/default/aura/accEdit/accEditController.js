({
    handleSaveRecord: function(component, event, helper) {
        
        
        
        
        component.find("accountRecordEditID").saveRecord($A.getCallback(function(saveResult) {
            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                var resultsToast=$A.get('e.force:showToast');
                component.set('v.recordSaveError',"Save completed successfully.");
                resultsToast.setParams({
                    "type": 'success',
                    "title": "Saved",
                    "message": "Save completed successfully."
                });
                 resultsToast.fire();
            } else if (saveResult.state === "INCOMPLETE") {
                var resultsToast=$A.get('e.force:showToast');
                 component.set('v.recordSaveError',"User is offline, device doesn't support drafts.");
                resultsToast.setParams({
                    "type": 'warning',
                    "title": "INCOMPLETE",
                    "message": "User is offline, device doesn't support drafts."
                });
                 resultsToast.fire();
            } else if (saveResult.state === "ERROR") {
                var resultsToast=$A.get('e.force:showToast');
                component.set('v.recordSaveError','Problem saving record, error: ' + JSON.stringify(saveResult.error));
                resultsToast.setParams({
                    "type": 'error',
                    "title": "ERROR",
                    "message": 'Problem saving record, error: ' + JSON.stringify(saveResult.error)
                });
                 resultsToast.fire();
                
            } else {
                 var resultsToast=$A.get('e.force:showToast');
                component.set('v.recordSaveError','Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error));
                resultsToast.setParams({
                    "type": 'info',
                    "title": "ERROR",
                    "message": 'Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error)
                });
                resultsToast.fire();
                
            }
        }));
        
    }
})