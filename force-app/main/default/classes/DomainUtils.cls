public class DomainUtils {
    
    
    @AuraEnabled
    public static String getBaseDomain(){
        
        String customDomain = System.Url.getSalesforceBaseUrl().toExternalForm().substringAfter('https://').substringBefore('.');
        
        Organization o = [SELECT InstanceName FROM Organization];
       
        String vfBaseDomain = customDomain + '--c.' + o.InstanceName.toLowerCase() + '.visual.force.com';
        
        return vfBaseDomain;
    }
}