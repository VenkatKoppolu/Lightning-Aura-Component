public with sharing class AccountRowsPanelController {
    
    @AuraEnabled
    public static void deleteRecord(Id recordId){
        Delete new Account(Id=recordId);
        
    }
}
