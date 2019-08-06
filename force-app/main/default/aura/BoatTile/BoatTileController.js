({
    myAction : function(component, event, helper) {

    },
    onBoatClick: function(component, event, helper) {
        
        //component event the below name is used both in handler as well as register event aura elements
        var boatSelectEvent=component.getEvent('SelectedBoatEvent');
        boatSelectEvent.setParams({
            boatId:component.get('v.boatRecord.Id')

        });
        boatSelectEvent.fire();
        

        var selectedBoatDetailEvent=$A.get('e.c:BoatSelected');
        //console.log('@@'+component.get('v.boatRecord').toString());
        var boat = component.get("v.boatRecord"); 
        selectedBoatDetailEvent.setParams({
            "boat":boat

        });
        selectedBoatDetailEvent.fire();

        var showBoatMapEvent=$A.get('e.c:PlotMapMarker');
        //console.log('@@'+component.get('v.boatRecord').toString());
        var boat = component.get("v.boatRecord"); 
        showBoatMapEvent.setParams({
            "sObjectId":boat.Id,
            "lat":boat.Geolocation__latitude__s,
            "long":boat.Geolocation__longitude__s,
            "label":boat.Name

        });
        showBoatMapEvent.fire();
    }
})