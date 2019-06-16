({
    doInit : function(component, event, helper) {
        helper.onInit(component, event, helper);
    },
    onSave: function(component, event, helper) {
        component.find("service").saveRecord(function(saveResult) {
          if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
            // record is saved successfully
            var resultsToast = $A.get("e.force:showToast");
            if (resultsToast) {
              resultsToast.setParams({
                "title": "Submitted",
                "message": "The review was saved."
              });
              resultsToast.fire();
            } else {
              alert('The review was saved.');
            }
            //helper.onInit(component, event, helper);
      
            var boatReviewAddedEvent = component.getEvent("BoatReviewAdded");
            boatReviewAddedEvent.fire();
          } else if (saveResult.state === "INCOMPLETE") {
           
            console.log("User is offline, device doesn't support drafts.");
          } else if (saveResult.state === "ERROR") {
            
            console.log('Problem saving contact, error: ' +
              JSON.stringify(saveResult.error));
          } else {
            console.log('Unknown problem, state: ' + saveResult.state +', error: ' + JSON.stringify(saveResult.error));
          }
        });
    },
    onRecordUpdated : function(component, event, helper) {
      var eventParams = event.getParams();
      if(eventParams.changeType === "CHANGED") {
          var changedFields = eventParams.changedFields;
          var saveResultsToast = $A.get("e.force:showToast");
          if(saveResultsToast!='undefined')
          {
              saveResultsToast.setParams({
                  "title": "Saved",
                  "message": "Boat Review Saved"
              });
              saveResultsToast.fire(); 
          }
          else
          {
              alert('Boat Review Saved');
          }
      }
  }
})