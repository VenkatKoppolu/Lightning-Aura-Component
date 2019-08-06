public with sharing class CaseService {
   public static void closeCases(Set<Id> caseIds,String closeReason){
       List<Case> closeCases=new List<Case>();
       for(Case c:[SELECT ID,STATUS,ClosedDate,Reason FROM CASE WHERE ID IN : caseIds]){
           c.STATUS='Closed';
           c.Reason=closeReason;
           closeCases.add(c);

       }
       SavePoint savepoint=Database.setSavePoint();
       try{
           update closeCases;

       }catch(Exception ex){
           Database.rollback(savepoint);
           throw ex;

       }

   }
}
