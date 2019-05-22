({
	handleNavigation : function(component, event, helper) {
        var navService=component.find('navService');
       
        var pageReference={
            "type":"standard__component",
            "attributes":{"componentName":"c__LightningNavigationDestination"},
            "state":{"message":"Hey Salesforce Casts"}
        }
		
        navService.navigate(pageReference); //pageReference R should be capital
	}
})