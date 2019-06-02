({
	toggleOneAndTwoSteps : function(component) {
        var stepOne = component.find("stepOne");
        var stepOneFooter = component.find("stepOneFooter");
        $A.util.toggleClass(stepOne, 'slds-hide');
        $A.util.toggleClass(stepOneFooter, 'slds-hide');
        var stepTwo = component.find("stepTwo");
        var stepTwoFooter = component.find("stepTwoFooter");
        $A.util.toggleClass(stepTwo, 'slds-hide');
        $A.util.toggleClass(stepTwoFooter, 'slds-hide');
	},
    toggleTwoAndThreeSteps : function(component){
        var stepTwo = component.find("stepTwo");
        var stepTwoFooter = component.find("stepTwoFooter");
        $A.util.toggleClass(stepTwo, 'slds-hide');
        $A.util.toggleClass(stepTwoFooter, 'slds-hide');
        var stepThree = component.find("stepThree");
        var stepThreeFooter = component.find("stepThreeFooter");
        $A.util.toggleClass(stepThree, 'slds-hide');
        $A.util.toggleClass(stepThreeFooter, 'slds-hide');
    }
})