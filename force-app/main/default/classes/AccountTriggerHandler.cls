public with sharing class AccountTriggerHandler implements ITriggerHandler {
    public static Boolean isDisabled = false;
    public Boolean IsDisabled() {
        if (HieraricalCustomSetting__c.getOrgDefaults() != NULL && HieraricalCustomSetting__c.getOrgDefaults().AccountTrigger__c) {
            return isDisabled;
        } else {
            return !isDisabled;
        }
    }

    public void BeforeInsert(List < SObject > newObject) {
        System.debug(LoggingLevel.INFO, 'In Before Insert');
        System.debug(LoggingLevel.INFO, 'Trigger.New is :\n' + Trigger.new);
        System.debug(LoggingLevel.INFO, 'Trigger.NewMap will be empty:\n' + Trigger.newMap);

    }
    public void BeforeUpdate(Map < Id, SObject > newObjectMap, Map < Id, SObject > oldObjectMap) {
        System.debug(LoggingLevel.INFO, 'In Before Update');
        System.debug(LoggingLevel.INFO, 'Trigger.New is :\n' + Trigger.new);
        System.debug(LoggingLevel.INFO, 'Trigger.NewMap is:\n' + Trigger.newMap);
        System.debug(LoggingLevel.INFO, 'Trigger.Old is :\n' + Trigger.old);
        System.debug(LoggingLevel.INFO, 'Trigger.oldMap is:\n' + Trigger.oldMap);
    }
    public void BeforeDelete(Map < Id, SObject > oldObjectMap) {
        System.debug(LoggingLevel.INFO, 'In Before Delete');
        System.debug(LoggingLevel.INFO, 'Trigger.New is empty :\n' + Trigger.new);
        System.debug(LoggingLevel.INFO, 'Trigger.NewMap is empty :\n' + Trigger.newMap);
        System.debug(LoggingLevel.INFO, 'Trigger.Old is :\n' + Trigger.old);
        System.debug(LoggingLevel.INFO, 'Trigger.oldMap is:\n' + Trigger.oldMap);
    }
    public void AfterInsert(Map < Id, SObject > newObjectMap) {
        System.debug(LoggingLevel.INFO, 'In After Insert\n');
        System.debug(LoggingLevel.INFO, 'Trigger.New is :\n' + Trigger.new);
        System.debug(LoggingLevel.INFO, 'Trigger.NewMap:\n' + Trigger.newMap);
    }
    public void AfterUpdate(Map < Id, SObject > newObjectMap, Map < Id, SObject > oldObjectMap) {
        System.debug(LoggingLevel.INFO, 'In After Update');
        System.debug(LoggingLevel.INFO, 'Trigger.New is :\n' + Trigger.new);
        System.debug(LoggingLevel.INFO, 'Trigger.NewMap \n' + Trigger.newMap);
        System.debug(LoggingLevel.INFO, 'Trigger.Old is :\n' + Trigger.old);
        System.debug(LoggingLevel.INFO, 'Trigger.oldMap :\n' + Trigger.oldMap);
    }
    public void AfterDelete(Map < Id, SObject > oldObjectMap) {
        System.debug(LoggingLevel.INFO, 'In After Delete');
        System.debug(LoggingLevel.INFO, 'Trigger.New is empty :\n' + Trigger.new);
        System.debug(LoggingLevel.INFO, 'Trigger.NewMap is empty \n' + Trigger.newMap);
        System.debug(LoggingLevel.INFO, 'Trigger.Old is :\n' + Trigger.old);
        System.debug(LoggingLevel.INFO, 'Trigger.oldMap :\n' + Trigger.oldMap);
    }
    public void AfterUnDelete(Map < Id, SObject > newObjectMap) {
        System.debug(LoggingLevel.INFO, 'In After  UnDelete');
        System.debug(LoggingLevel.INFO, 'Trigger.New is :\n' + Trigger.new);
        System.debug(LoggingLevel.INFO, 'Trigger.NewMap :\n' + Trigger.newMap);
        System.debug(LoggingLevel.INFO, 'Trigger.Old is empty :\n' + Trigger.old);
        System.debug(LoggingLevel.INFO, 'Trigger.oldMap is empty:\n' + Trigger.oldMap);
        //id of the account record will remain the same
    }
}
