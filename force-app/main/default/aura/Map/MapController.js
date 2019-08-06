({
    jsLoaded: function(component) {
        component.set("v.jsLoaded", true);
    },
    onPlotMapMarker: function(component,event) {
        debugger;
        component.set("v.location", {'latitude' : event.getParam('lat'), 'longitude' : event.getParam('long')});

       
        
    }  
})