public interface ITriggerHandler {
    void BeforeInsert(List<SObject> newObject);
    void BeforeUpdate(Map<Id,SObject> newObjectMap,Map<Id,SObject> oldObjectMap);
    void BeforeDelete(Map<Id,SObject> oldObjectMap);
    void AfterInsert(Map<Id,SObject> newObjectMap);
    void AfterUpdate(Map<Id,SObject> newObjectMap,Map<Id,SObject> oldObjectMap);
    void AfterDelete(Map<Id,SObject> oldObjectMap);
    void AfterUnDelete(Map<Id,SObject> newObjectMap);
    Boolean IsDisabled();
} 