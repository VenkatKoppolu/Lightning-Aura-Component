<aura:application extends="force:slds"  >
    <aura:attribute name="appContacts" type="SObject[]"/>
    <aura:attribute name="columns" type="List" default="[
    {label: 'ID', fieldName: 'Id', type: 'text'},
    {label: 'Name', fieldName: 'Name', type: 'text'}]"/>
  
        <c:searchSObjectComponet searchComplete="{!c.handleContactSearchComplete}"/>
      
                <lightning:datatable aura:id="contactList" 
                keyField="id"
                data="{! v.appContacts }"
                columns="{! v.columns }"
                hideCheckboxColumn="true"/>
            


</aura:application>