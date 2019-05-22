({
    // Your renderer method overrides go here
    render:function(component,event,helper){
       // debugger;
       var ret = this.superRender();
       
       // component.set("v.welcomeMsg",component.get("v.welcomeMsg")+"To ");
       return ret;
    },
    rerender:function(component,event,helper){
        //debugger;
       this.superRerender();
    },
    afterRender:function(component,event,helper){
       // debugger;
       this.superAfterRender ();
    },
    unRender:function(component,event,helper){
     //   debugger;
     this.superUnrender();
    }
})