public with sharing class TriggerDispatcher {
    public static void Run(ITriggerHandler handler){
        if (handler.IsDisabled())
            return;
        
        // Before trigger logic
        if (Trigger.IsBefore )
        {
            if (Trigger.IsInsert)
                handler.BeforeInsert(trigger.new);

            if (Trigger.IsUpdate)
                handler.BeforeUpdate(trigger.newMap, trigger.oldMap);

            if (Trigger.IsDelete)
                handler.BeforeDelete(trigger.oldMap);
        }

        // After trigger logic
        if (Trigger.IsAfter)
        {
            if (Trigger.IsInsert)
                handler.AfterInsert(Trigger.newMap);

            if (Trigger.IsUpdate){
                handler.AfterUpdate(trigger.newMap, trigger.oldMap);
            }

            if (Trigger.IsDelete)
                handler.AfterDelete(trigger.oldMap);

            if (Trigger.isUnDelete)
                handler.AfterUndelete(trigger.oldMap);
        }

    }
}
