<aura:application extends="force:slds"  >
    <aura:attribute name="appContacts" type="SObject[]"/>
    <aura:attribute name="columns" type="List" default="['ID','Name']"/>
  
        <c:searchSObjectComponet searchComplete="{!c.handleContactSearchComplete}"/>
      
                <lightning:datatable aura:id="contactList" 
                keyField="id"
                data="{! v.appContacts }"
                columns="{! v.columns }"
                hideCheckboxColumn="true"/>
            


</aura:application>