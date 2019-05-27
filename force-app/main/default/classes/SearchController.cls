public with sharing class SearchController {
    
    @AuraEnabled
    public static List<SObject> searchSobjectRecords(String SObjectInfo,String SearchText){
        List<SObject> recordsList=Database.query('SELECT NAME FROM '+SObjectInfo+' WHERE Name like \''+SearchText+'%\'');
        return recordsList;
        
    }
}
