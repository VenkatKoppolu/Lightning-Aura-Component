public with sharing class ContactPhotoUploadController {

    Private Static FINAL String fixedFileName = 'profilePhoto.jpg';
    List<Document> savedPicture;

    public boolean displaying { get; set; }
    public Invoice__c pageContact;
    transient public Blob profilePicFile { get; set; }
    public Id currentPicture { get; set; }
    
    /** Constructor, grab record, and check/load an existing photo */
    public ContactPhotoUploadController(ApexPages.StandardController controller) {
        ID invoiceID=controller.getRecord().id;
        pageContact=[select id,account__r.id,contact_photo_id__c from invoice__c where id=:invoiceID];
        
string documentName='cnt'+String.valueof(pageContact.Account__r.Id);
        // first, we cannot have any conflicting files
  
        //Account acc=controller.getRecord().invoices;
        if(pageContact.contact_photo_id__c!=null)
        {
savedPicture= [SELECT Id, name,folderid FROM Document WHERE DeveloperName = :documentName Limit 1]; 
        if(savedPicture.size()!=0)
        {
        currentPicture =savedPicture.get(0).id;
        }
       
      
        }
        
        displaying = true;
    }

    /** toggle switches between the photo display and photo upload form */
    public void toggle() {
        displaying = !displaying;
    }
    
    /** saveFile clears any existing profile picture, retrieves the data from the form, and saves it under the relevant filename*/
    Public Pagereference saveFile() { 
    string documentName='cnt'+String.valueof(pageContact.Account__r.Id);    
    savedPicture= [SELECT Id, name,folderid FROM Document WHERE DeveloperName = :documentName Limit 1]; 
        Document doc;
        if(savedPicture.size() > 0) {
            doc = new Document(id=savedPicture[0].id, body = profilePicFile,FolderId='00l28000001SZji');
        update doc;
        }
       else
       {
        // Now, we save the new blob
        doc = new Document(DeveloperName = documentName, name = documentName, body = profilePicFile,FolderId='00l28000001SZji');
        insert doc;
        
        }
        
        pageContact.contact_photo_id__c= doc.Id;
        currentPicture= doc.Id;
        update pageContact;
        
        displaying = true;
        
       PageReference pf = new PageReference('/' + pageContact.id);
pf.setRedirect(true);
return pf;

    }
    
    public pageReference cancel()
    {

    PageReference pf = new PageReference('/' + pageContact.id);
pf.setRedirect(true);
return pf;
    }
    

}