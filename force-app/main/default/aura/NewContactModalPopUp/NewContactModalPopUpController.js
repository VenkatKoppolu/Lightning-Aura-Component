({
	doInit : function(component, event, helper) {
        helper.toggleTwoAndThreeSteps(component);
        component.set("v.progressIndicatorFlag", "step1");
        
        component.find ("ContactRecordCreator").getNewRecord(
        "Contact",
            null,
            false,
            $A.getCallback(function(){try{
               
                var error = component.get("v.newContactError");
                var rec = component.get("v.newContact");
                if(error || (rec === null)){
                    console.log(error); 
                }else{          
                    console.log(rec);
                }
            }catch(ex){

                debugger;
            }
        }));			
	},
    goToStepTwo : function(component, event, helper) {
        helper.toggleOneAndTwoSteps(component);
        component.set("v.progressIndicatorFlag", "step2");
    },
    goToStepThree : function(component, event, helper) {
        helper.toggleTwoAndThreeSteps(component);
        component.set("v.progressIndicatorFlag", "step3");
    },
    goBackToStepOne : function(component, event, helper) {
        helper.toggleOneAndTwoSteps(component);
        component.set("v.progressIndicatorFlag", "step1");
    },
    goBackToStepTwo : function(component, event, helper) {
        helper.toggleTwoAndThreeSteps(component);
        component.set("v.progressIndicatorFlag", "step2");
    },
	saveContactRecord : function(component, event, helper) {
        component.find("ContactRecordCreator").saveRecord(
            function(saveResult){
                console.log(JSON.stringify(saveResult));
                if(saveResult.state === "SUCCESS" || saveResult.state === "DRAFT"){
                    var savedRecordPage = $A.get("e.force:navigateToSObject");
                    savedRecordPage.setParams({
                        "recordId": saveResult.recordId
                    });
                    savedRecordPage.fire();
                    
		            var resultsToast = $A.get("e.force:showToast");
                    resultsToast.setParams({
                        "title": "Saved",
                        "message": "The record is saved"
                    });
            
            		resultsToast.fire();
                }else if (saveResults.state === "ERROR"){
                    console.log(saveResults.error);
                }else if(saveResults.state === "INCOMPLETE"){
                    console.log(saveResults.state);
                }else{
                    console.log(saveResults.state);
                }
            
        	                                                  
		});
    } 
})