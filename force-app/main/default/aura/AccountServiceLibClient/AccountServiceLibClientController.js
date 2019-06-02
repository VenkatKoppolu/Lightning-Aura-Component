({
	afterScriptsLoaded: function(component, event, helper) {

		var service = new AccountService(component);//new AccountService constructor will invoke javascript function AccountService given in static resource.
		service.findAll($A.getCallback(function(error, data) {
			// TODO: Implement proper error handling
			component.set("v.accounts", data);                           
		}));

	}
})