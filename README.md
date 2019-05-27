Lightning is a event driven programming paradigm and which gives developers to an ability to automate things on some user events. e.g., User click on a button, link, page loading and renderring

**Component-Level Events**
Component-level events are events that were created by a component and can be handled by the same component(itself), or the parent component where this is used or application. Component events are useful for situations where your component can be used in an application multiple times and you don’t want the different instances interfering with each other.

In this example we have created a searchComponent which will be an event of COMPONENT type
The aura:attribute defined in this example represents the data that can be carried with the event. It is also referred to as the *event’s shape*.

**Register the Event**
The contactSearch component registers that it can generate the event with the aura:registerEvent component.
The aura:registerEvent specifies the event type. Note the “c:” prefix. That is the default namespace and is used in orgs that do not have a namespace. *The name attribute is what the component’s container uses to specify which of its controller functions should be called when the event is fired.*

**Declare the Handler**
In the Contact application, the app’s handleContactSearchComplete controller method will be called when the event is fired.

**Fire the Event**
The contactSearch component creates the event in the controller, sets its parameters, and fires it after the search has completed. This code resides in a helper function that is called from a controller function.

**Handle the Event**
The app’s uses contactSearch component within and the handler method is then called, which allows it to update its list of Contacts.
The parameter that was set is retrieved with the getParam method as a feature from Lightning Component Framework . We don't have to write code to manipulate the DOM to update the table.
When the value from this getParam is assigned to a value provider then the Component or APP reflects the change automatically.



**Application-Level Events**
Application level events are events that were created by a component and any lightning component/Application can handle this event inspite of it being not used in a Parent component.
Here we are creating an Lightning Application Event searchApplicationEvent with type as APPLICATION in place of COMPONENT

**Register the Event**
We have created a new APP AccountSearchApp we register the event here and unlike Component event we wouldn't rely on the name attribute of this event Registration, we would only use the lightning event name here its "searchApplicationEvent"

**Handle the Event**
Application Event can be handled using  handler aura component where event attribute is specified with C:<Application event> name and action to a controller to fetch the result from the event using this handler.
<aura:handler event="c:SearchApplicationEvent" action="{!c.handleAccountSearchComplete}"/>

**Application Event Firing**
We can publish or trigger an Application event using Aura framework get method and the notation is 

var appEvent = $A.get("e.c:SearchApplicationEvent"); //get the event using Aura framework $A
        appEvent.setParams({
            records: component.get('v.searchRecords') 
        }); //set the parameters
        appEvent.fire(); fire the event

upon fire event we would land into the handler controller handleAccountSearchComplete to fetch the result.

**Conclusion**
We have used two Application to differentiate between the COMPONENT and APPLICATION Events clearly.
