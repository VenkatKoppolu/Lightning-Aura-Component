/*({
	helperMethod : function() {
	}
})*/


({
      getformattedDate : function(component,dateStr) {
        debugger;
        var dateVar             = $.moment(dateStr);
              var dateVar             = $.fullCalendar.parseDate(dateStr);
              var formattedDateStr    = $.fullCalendar.formatDate(dateVar, 'dd/MM/yyyy');
              return formattedDateStr;
          },
          createAvailabilityRecord :function(component,input){
            var modalBody;
        $A.createComponent("c:CalendarPopUpComponent", {},
                           function(content, status) {
                               if (status === "SUCCESS") {
                                   modalBody = content;
                                   component.find('overlayLib').showCustomModal({
                                       header: "Create Avaialbility for Lightning Modal Component",
                                       body: modalBody,
                                       showCloseButton: true
                                   })
                               }
                           });

          },


    tranformToFullCalendarFormat : function(component,events) {
        var eventArr = [];
        for(var i = 0;i < events.length;i++){
            eventArr.push({
                'id':events[i].Id,
                'start':events[i].StartDateTime,
                'end':events[i].EndDateTime,
                'title':events[i].Subject
            });
        }
        return eventArr;
    },

    fetchEvents : function(component) {
        var action = component.get("c.getEvents");
        var self = this;
        action.setCallback(this, function(response) {
            var state = response.getState();
            if(component.isValid() && state === "SUCCESS"){
                var eventArr = self.tranformToFullCalendarFormat(component,response.getReturnValue());
                self.loadDataToCalendar(component,eventArr);
                component.set("v.events",eventArr);
            }
        });

        $A.enqueueAction(action);
    },

})