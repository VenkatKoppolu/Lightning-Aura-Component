public with sharing class ExpenseController {
    @AuraEnabled
    public static List<Expense__c> getExpenses() {

        // Perform isAccessible() check here
        if(Schema.sObjectType.Expense__c.isAccessible())
        {
        return [SELECT Id, Name, Amount__c, Client__c, Date__c,
        Reimbursed__c, CreatedDate FROM Expense__c];
        }
        else
        {
            return null;
        }
    }
    
    @AuraEnabled
public static Expense__c saveExpense(Expense__c expense) {

    // Perform isUpdateable() check here
    if(Schema.sObjectType.Expense__c.isUpdateable())
    {
        upsert expense;
       
    }
     return expense;
}
}