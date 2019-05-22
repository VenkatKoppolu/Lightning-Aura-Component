public class FullCalendarController {

    @AuraEnabled
    public static List<Event> getEvents(){
        return [SELECT AccountId,EndDateTime,Id,StartDateTime,Subject FROM Event];
    }

    @AuraEnabled
    public static List<Event> createAvailabilities(){
        return [SELECT AccountId,EndDateTime,Id,StartDateTime,Subject FROM Event];
    }
}