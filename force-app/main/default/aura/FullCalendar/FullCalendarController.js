/*({
	myAction : function(component, event, helper) {
	}
})*/

({
    /*afterScriptsLoaded: function(cmp,evt,helper){
			console.log('@@@controllerJS');debugger;
        var events = cmp.get("v.events");
        console.log(events);
        if(!events.length)
        {
            helper.fetchEvents(cmp);
            this.calendarLoaded(cmp,evt,helper);
        }
    },*/
    calendarLoaded:function(component,event,helper){
console.log('@@@controllerJS');debugger;
//console.log({!$User.Name});
  var ele = component.find('calendar').getElement();
      $(ele).fullCalendar({
          theme   : true,
          header  : {
              left    : 'month,agendaWeek,agendaDay,prev,next today',
              center  : 'title',
              right   : ''
          },

          timeFormat: 'H(:mm)',
          defaultView: 'month', //'agendaWeek',

          editable    : false,
          height      : 'auto',
          weekMode    : 'variable',
          columnFormat: {
              month: 'ddd',
              week: 'ddd MM/dd'
          },
          //columnFormat: 'ddd {!calenderDateFormat}',
          allDaySlot : false,
          firstDay    : 0,
          //eventSources: [ candidateEventArray ],
          eventRender : function(event, element) {
              var view = ele.fullCalendar('getView');
              //if(view.name == "month"){
                  //console.log("inside "+ element.find('.fc-event-time').text());
                 // element.find('.fc-event-time').hide();
              //}
              if (event.description) {
                  element.find('.fc-event-title').after("<span class=\"myClass\">" + event.description + "</span>");
              }
              element.find('.fc-event-time').text(element.find('.fc-event-title').text());
                      element.find('.fc-event-title').hide();
              //  if(event.status == 'Booked' || event.status == 'Available' || event.status == 'Unavailable' || event.status == 'Interview'){
              // Add qTip for each event.
              element.qtip({
                  content: {
                      text    : event.tooltip,
                      title   : {
                          text    : event.tooltipTitle,
                      }
                  },
                  position: {
                      //W-007573 - Accenture - SB - Removed my, at, target and adjust attributes and added new values to target and adjust attributes.
                      /*my : 'top center',
                      at : 'center center',*/
                      /*target : getMouseTarget(),*/
                      target: 'mouse',
                      viewport : $(window),
                      /*adjust: {
                          mouse: true,
                          x : getPositionAdjust(event.start),
                      }*/
                      adjust: { mouse: false}
                  },
                  style: {
                      classes : event.tooltipStyleClass,
                      width   : 350
                  },
                  hide: {
                      fixed: true,
                  }

              }); // end of element.qtip({
              //}
              //element.tooltip();
          },
          eventMouseover: function(calEvent, domEvent) {
              var today = getformattedDate(new Date());
              var calEventDate = getformattedDate(calEvent.start);
              var todayDate = $.fullCalendar.parseDate(new Date());
              todayDate.setHours(0);
              todayDate.setMinutes(0);
              todayDate.setSeconds(0);
              todayDate.setMilliseconds(0);
              var calEventStartDate = $.fullCalendar.parseDate(calEvent.start);

              if(!(calEventStartDate < todayDate)) {
                  if(calEvent.status == 'Booked'){
                      var eventId = calEvent.id;
                      var today = new Date();
                      var layer = '<div id=\"events-layer\" class=\"fc-transparent\" style=\"position:absolute; width:100%; height:100%; top:-1px; text-align:left; z-index:100\"> <a> <img border=\"0\" style=\"padding-right:5px;cursor:pointer;\" src=\"{!$Resource.DeleteIcon}\" height=\"20\" width=\"20\" onClick=\"deleteCalEvent(\'' + eventId + '\');\"></a></div>';
                      $(this).append(layer);
                  }
                  else if(calEvent.status != 'Booked') {
                      var eventId = calEvent.id;
                      var today = new Date();
                      var layer = '<div id=\"events-layer\" class=\"fc-transparent\" style=\"position:absolute; width:100%; height:100%; top:-1px; text-align:left; z-index:100\"> <a> <img border=\"0\" style=\"padding-right:5px;cursor:pointer;\" src=\"{!$Resource.DeleteIcon}\" height=\"20\" width=\"20\" onClick=\"deleteCalEvent(\'' + eventId + '\');\"></a></div>';
                      $(this).append(layer);
                  }
              }
          },
          eventMouseout: function(calEvent, domEvent) {
              if(calEvent.status != 'Booked'){
                  $("#events-layer").remove();
              }
              if(calEvent.status == 'Booked'){
                  $("#events-layer").remove();
              }
          },
          dayClick: function(date, jsEvent, view) {
            debugger;
              var today = new Date().setHours(0,0,0,0);
              //var moment =$('#calendar').fullCalendar('getDate');
              //var dateStr = helper.getformattedDate(component,date.d);
              console.log('### dateStr=' + date.format() );
              if(!(date < today)) {
                  helper.createAvailabilityRecord(component);
              }

          },
          eventClick: function(calEvent, jsEvent, view) {},

      });
      console.log('@@@controllerJS');debugger;
    },

})