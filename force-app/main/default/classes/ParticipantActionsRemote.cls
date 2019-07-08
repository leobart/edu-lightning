/**
 * Created by Leonid Bartenev
 */

public class ParticipantActionsRemote {
    
    public class ParticipantException extends Exception{}
    
    @AuraEnabled
    public static void addParticipant(Participant__c participant){
        try{
            throw new ParticipantException('Test error!');
            //insert participant;
        }catch (Exception e){
            AuraHelper.throwException(e);
        }
    }
    
    @AuraEnabled
    public static List<Participant__c> getParticipants(String searchString){
        try {
            if(searchString == null) searchString = '';
            searchString = '%' + searchString + '%';
            List<Participant__c> participants = [
                    SELECT
                            First_Name__c,
                            Last_Name__c,
                            Email__c,
                            DOB__c
                    FROM Participant__c
                    WHERE First_Name__c LIKE: searchString OR Last_Name__c LIKE: searchString
                    ORDER BY First_Name__c, Last_Name__c];
            return participants;
        }catch (Exception e){
            return (List<Participant__c>)AuraHelper.throwException(e);
        }
    }
    
    @AuraEnabled
    public static void deleteParticipant(Id participantId){
        try{
            delete new Participant__c(Id = participantId);
        }catch (Exception e){
            AuraHelper.throwException(e);
        }
    }


}