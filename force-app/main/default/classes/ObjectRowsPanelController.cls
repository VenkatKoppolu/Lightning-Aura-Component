public with sharing class ObjectRowsPanelController {
    
    @AuraEnabled
    public static List<SObject> getRecords(String sObjectType,List<String> fields,Integer maxRows){
        
        String queryString='SELECT ID,Name';
        for(String field : fields){
            queryString+=','+field;


        }
        queryString+=' FROM '+sObjectType+' LIMIT '+maxRows;
        List<Sobject> objectList=Database.query(queryString);
        return objectList;
    }
}
