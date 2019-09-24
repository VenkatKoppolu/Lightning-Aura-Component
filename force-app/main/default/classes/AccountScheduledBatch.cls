global class AccountScheduledBatch implements Database.Batchable<SObject>{
    global final string query;
    global AccountScheduledBatch(String q) {
        query=q;

    }
    global Database.QueryLocator start(){
        return Database.getQueryLocator(query);
    }
    global void execute(Database.BatchableContext bc,List<Sobject> scope){
        List<Account> acntList=new List<Account>();
        for(Account acn:scope){
            acn.Name=acn.Name+'3';
            acntList.add(acn);
        }
        update acntList;
    }
    global void finish(Database.BatchableContext bc){
        
    }
}
