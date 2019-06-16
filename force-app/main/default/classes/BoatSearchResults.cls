public  class BoatSearchResults {
    @AuraEnabled
    public static List<SObject> getBoats(String boatTypeId){
        if(String.isNotBlank(boatTypeId)){
        return [SELECT Id,Name,Description__c,Price__c,Length__c,Contact__r.Name,Contact__r.Email,Contact__r.HomePhone,BoatType__r.Name,Picture__c From Boat__c where BoatType__c =:(Id)boatTypeId];
        }
        else{
            return [SELECT Id,Name,Picture__c,Contact__r.Name From Boat__c];
        }
    }
     @AuraEnabled(cacheable=true)
    public static List<BoatType__c> getAllBoatTypes(){
       List<BoatType__c> boatTypes=[SELECT Id,Name from BoatType__c];
       return boatTypes;
    }
     
}
