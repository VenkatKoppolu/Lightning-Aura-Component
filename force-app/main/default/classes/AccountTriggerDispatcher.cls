public with sharing class AccountTriggerDispatcher {
   public static void Run(ITrigger handler){
       if(handler.isDisabled()){
           return;
       }
       if(Trigger.IsBefore){
           if(Trigger.IsInsert){
               handler.beforeInsert(Trigger.New);

           }
           if(Trigger.IsUpdate){
               handler.beforeUpdate(Trigger.OldMap, Trigger.NewMap);

           }
           if(Trigger.IsDelete){
                handler.beforeDelete(Trigger.OldMap);
           }

       }
       if(Trigger.IsAfter){
           if(Trigger.IsInsert){
               handler.afterInsert(Trigger.NewMap);
           }
           if(Trigger.IsUpdate){
               handler.afterUpdate(Trigger.OldMap, Trigger.NewMap);
           }
           if(Trigger.IsDelete){
               handler.beforeDelete(Trigger.OldMap);
           }
           if(Trigger.IsUnDelete){
                handler.afterUnDelete(Trigger.OldMap);
           }

       }
   }
}
