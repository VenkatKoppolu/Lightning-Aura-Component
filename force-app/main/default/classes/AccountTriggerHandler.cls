public class AccountTriggerHandler implements ITrigger{
    public static Boolean TriggerDisabled=false;
    public Boolean isDisabled(){
        if(myCustomSetting__c.AccountTriggerSwitch){
            return TriggerDisabled;
        }
        else{
        return false;
        }
    }

    public void beforeInsert(List<SObject> newItems){

    }

    public void afterInsert(Map<Id,SObject> newItems){
        
    }

    void beforeUpdate(Map<Id,SObject> oldItems,Map<Id,SObject> newItems){

    }
    void afterUpdate(Map<Id,SObject> oldItems,Map<Id,SObject> newItems){

    }
    void beforeDelete(Map<Id,SObject> oldItems){

    }
    void afterDelete(Map<Id,SObject> oldItems){

    }
    void AfterUndelete(Map<Id, SObject> oldItems){
        
    }
}
