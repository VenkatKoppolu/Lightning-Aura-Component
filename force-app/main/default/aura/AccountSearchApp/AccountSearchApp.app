<aura:application extends="force:slds">
        <aura:attribute name="appAccounts" type="SObject[]" />
        <aura:attribute name="columns" type="List" default="[
        {label: 'Id', fieldName: 'Id', type: 'text'},
        {label: 'Name', fieldName: 'Name', type: 'text'}]" />
        <!--Application event handler is defined below-->
        <aura:handler event="c:SearchApplicationEvent" action="{!c.handleAccountSearchComplete}"/>
        <div class="c-container">
            <lightning:layout multipleRows="true">
                <lightning:layoutItem padding="around-small" size="12">
                    <div class="page-section page-header">
                        <h2>Header</h2>
                    </div>
                </lightning:layoutItem>
                <lightning:layoutItem padding="around-small" size="12">
                    <lightning:layout>
                        <lightning:layoutItem padding="around-small" size="3">
                            <div class="page-section page-right">
                                <h2>Search Account(s)</h2>
                                <p>
                                    <c:searchSObjectComponet sObjectInfo="Account" />
                                </p>
                            </div>
                        </lightning:layoutItem>
                        <lightning:layoutItem padding="around-small" size="6">
                            <div class="page-section page-main">
                                <h2>Accounts List</h2>
                                <p>  <lightning:datatable
                                    keyField="Id"
                                    data="{! v.appAccounts }"
                                    columns="{! v.columns }"
                                    hideCheckboxColumn="true"/>
                                </p>
                                
                            </div>
                        </lightning:layoutItem>
                    </lightning:layout>
                </lightning:layoutItem>
            </lightning:layout>
        </div>
</aura:application>	
