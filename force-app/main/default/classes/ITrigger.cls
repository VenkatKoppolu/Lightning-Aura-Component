public interface ITrigger {
    void beforeInsert(List<SObject> newItems);
    void afterInsert(Map<Id,SObject> newItems);
    void beforeUpdate(Map<Id,SObject> oldItems,Map<Id,SObject> newItems);
    void afterUpdate(Map<Id,SObject> oldItems,Map<Id,SObject> newItems);
    void beforeDelete(Map<Id,SObject> oldItems);
    void afterDelete(Map<Id,SObject> oldItems);
    void AfterUndelete(Map<Id, SObject> oldItems);
    Boolean isDisabled();

}
