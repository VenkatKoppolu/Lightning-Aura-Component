({
	clickCreateItem  : function(component, event, helper) {
       var validCampingItem = component.find('campingitemform').reduce(function (validSoFar, inputCmp) {
      inputCmp.showHelpMessageIfInvalid();
      return validSoFar && inputCmp.get('v.validity').valid;
    }, true);
    if (validCampingItem) {
       helper.createItem(component,event,helper);
	}
        
		 
	}
})