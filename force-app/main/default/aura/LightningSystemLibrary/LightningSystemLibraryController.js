({
    handleShowActiveSectionName : function(component, event, helper) {
        console.log('@@ Active Section in Accordian '+ component.find('accordion').get('v.activeSectionName'));
        alert(component.find('accordion').get('v.activeSectionName'));
        /*
        Component.find() locates a local id with the lightning app/component 
        the tag should be assigned with an attribute aura:id for this to capture 
        in controller using component.find()
        */

    },
    handleToggleSectionD : function(component, event, helper) {
        component.set('v.isSectionDVisible',!component.get('v.isSectionDVisible'));

    }, handleClick : function (cmp, event, helper) {
        alert("You clicked: " + event.getSource().get("v.label"));
    },handleLikeButtonClick : function (cmp) {
        cmp.set('v.liked', !cmp.get('v.liked'));
    },
    handleAnswerButtonClick: function (cmp) {
        cmp.set('v.answered', !cmp.get('v.answered'));
    }
})
