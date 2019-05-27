<aura:application extends="force:slds"  >
    <aura:attribute name="appContacts" type="SObject[]"/>
    <aura:attribute name="columns" type="List" default="[
    {label: 'ID', fieldName: 'Id', type: 'text'},
    {label: 'Name', fieldName: 'Name', type: 'text'}]"/>
    <lightning:card footer="Card Footer" title="Hello">
        <aura:set attribute="actions">
            <c:searchSObjectComponet searchComplete="{!c.handleContactSearchComplete}" sObjectInfo="Contact"/>
            <lightning:datatable aura:id="contactList" 
            keyField="id"
            data="{! v.appContacts }"
            columns="{! v.columns }"
            hideCheckboxColumn="true"/>
        </aura:set>
        <p class="slds-p-horizontal_small">
           
        </p>
    </lightning:card>
      
      
            
            


</aura:application>