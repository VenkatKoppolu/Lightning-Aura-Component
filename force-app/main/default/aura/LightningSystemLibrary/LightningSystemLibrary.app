<aura:application extends="force:slds">  <!--force:slds is used to inhert the slds library into this app-->
        <aura:attribute name="isSectionDVisible" type="Boolean" default="false" />
        <!--isSectionDVisible is an attribute of this app which holds a value of Boolean type and is defaulted to false-->
        <aura:attribute name="liked" default="false" type="Boolean" />
        <aura:attribute name="answered" default="false" type="Boolean" />
    
        
        <br/><div class="slds-text-heading_large">Avatar</div><br/>
        <lightning:avatar src="/bad/image/url.jpg" initials="" fallbackIconName="standard:account" alternativeText="Salesforce" class="slds-m-right_small"/>
        <lightning:avatar src="/bad/image/url.jpg" initials="" fallbackIconName="standard:avatar"  alternativeText="Bob Wilson" class="slds-m-right_small"/>
        <lightning:avatar src="/bad/image/url.jpg" initials="" fallbackIconName="custom:custom92"  alternativeText="Wilson Enterprises" class="slds-m-right_small"/>
        
        <br/><div class="slds-text-heading_large">Badge</div><br/>
        <lightning:badge label="Label"/>
    

        <br/><div class="slds-text-heading_large">Accordion &amp; AccordionSection</div><br/>
        <!--Lightning:button component is used to show a button with label as one of the attribute and onclick attibute calls the controller function-->
        <lightning:button onclick="{! c.handleShowActiveSectionName }" label="Show Active Section Name"/>
        <lightning:button onclick="{! c.handleToggleSectionD }" label="Toggle Section D"/>
        <lightning:accordion aura:id="accordion" activeSectionName="B">
                <lightning:accordionSection name="A" label="Accordion Title A">This is the content area for section A</lightning:accordionSection>
                <lightning:accordionSection name="B" label="Accordion Title B">This is the content area for section B</lightning:accordionSection>
                <lightning:accordionSection name="C" label="Accordion Title C">This is the content area for section C</lightning:accordionSection>
                <aura:if isTrue="{! v.isSectionDVisible }">
                        <lightning:accordionSection name="D" label="Accordion Title D">
                            <p>This is the content area for section D.</p>
                            <p>Suspendisse est eros, maximus et risus a, luctus bibendum eros. Etiam ultrices tellus vehicula neque ornare, viverra venenatis purus accumsan. Aenean viverra finibus odio, vitae bibendum nisi tincidunt sed. Ut at porta dui. Praesent varius eleifend quam eget gravida. Curabitur maximus, leo sit amet dapibus gravida, mi ligula lacinia turpis, id feugiat tellus urna quis odio. Nullam tristique orci eu magna hendrerit vestibulum. Sed id purus at metus tristique tristique et vitae arcu. Sed molestie odio felis, sit amet lacinia mauris rutrum nec. Morbi semper lacinia tellus bibendum faucibus. Vestibulum eget ornare sapien, eget ultrices orci.</p>
                        </lightning:accordionSection>
                </aura:if>
        </lightning:accordion>

        <br/><div class="slds-text-heading_large">Breadcrumbs &amp; breadcrumb</div><br/>
        <lightning:breadcrumbs>
                <lightning:breadcrumb label="Parent Account" href="path/to/place/1"/>
                <lightning:breadcrumb label="Case" href="path/to/place/2"/>
        </lightning:breadcrumbs>

        <br/><div class="slds-text-heading_large">Buttons &amp; Button Group</div><br/>
        <lightning:button variant="base" label="Base" title="Base action" onclick="{! c.handleClick }"/>

        <lightning:buttonGroup>
        <!-- Neutral variant (default) -->
        <lightning:button label="Neutral" title="Neutral action" onclick="{! c.handleClick }"/>
    
        <!-- Brand variant: Identifies the primary action in a group of buttons -->
        <lightning:button variant="brand" label="Brand action" title="Brand action" onclick="{! c.handleClick }" />
    
        <!-- Destructive variant: Identifies a potentially negative action -->
        <lightning:button variant="destructive" label="Destructive" title="Destructive action" onclick="{! c.handleClick }"/>
    
        <!-- Success variant: Identifies a successful action -->
        <lightning:button variant="success" label="Success" title="Success" onclick="{! c.handleClick }"/>


    </lightning:buttonGroup>

    
        <br/><div class="slds-text-heading_large"> Button Icon &amp; Button Icon Stateful</div><br/>
       
       
  <lightning:buttonIcon iconName="utility:down"  size="small"     variant="bare" alternativeText="View More" />
  <lightning:buttonIcon iconName="utility:settings" variant="bare" alternativeText="Settings" iconClass="dark"/>
  <div class="slds-m-around_medium">
        <lightning:buttonIconStateful iconName="utility:like" selected="{! v.liked }" onclick="{! c.handleLikeButtonClick }" alternativeText="Like" />
    </div>
    <div class="slds-m-around_medium">
        <lightning:buttonIconStateful iconName="utility:answer" selected="{! v.answered }" onclick="{! c.handleAnswerButtonClick }" alternativeText="Answer" size="small"/>
    </div>
    <!-- disabled -->
    <div class="slds-m-around_medium">
        <lightning:buttonIconStateful iconName="utility:like"  alternativeText="Disabled" disabled="true"/>
    </div>
    


</aura:application>	
