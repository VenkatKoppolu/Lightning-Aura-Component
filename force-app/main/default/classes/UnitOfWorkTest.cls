@isTest
public with sharing class UnitOfWorkTest {
    
    private static List<Schema.SObjectType> MY_SOBJECTS =
        new Schema.SObjectType[] {
            Account.SObjectType,
            Contact.SObjectType,
            Note.SObjectType };
                
    static testMethod void challengeComplete(){
        
        fflib_SObjectUnitOfWork uow = new fflib_SObjectUnitOfWork(MY_SOBJECTS);
            for(Integer a=0; a<100; a++)
            {
                Account acnt = new Account();
                acnt.Name = 'Account Test Name ' + a;
                
                uow.registerNew(new List<SObject>{acnt});
                for(Integer i=0; i<5; i++)
                {
                    Contact cnt = new Contact();
                    cnt.LastName = acnt.Name + ' contact  ' + i;
                    uow.registerNew(cnt, Contact.AccountId, acnt);
                    
                    Note not1 = new Note();
                    not1.Title ='test Note'+i;
                    not1.Body  ='test Note wdmvdjhwgvjhdsvjhsdvjsdbv'+i;
                   
                    uow.registerNew(not1, Note.ParentId , cnt);
                    
                    
                    //uow.registerRelationship(oppLineItem, OpportunityLineItem.PricebookEntryId, pbe);
                    
                }
            }

            uow.commitWork();
        
        System.assertEquals(100, [Select Id from Account].size());
System.assertEquals(500, [Select Id from Contact].size());
System.assertEquals(500, [Select Id from Note].size());

    }


}