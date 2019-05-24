declare module "@salesforce/apex/AccountCalendarController.getDefaultCalendarSettings" {
  export default function getDefaultCalendarSettings(): Promise<any>;
}
declare module "@salesforce/apex/AccountCalendarController.getEvents" {
  export default function getEvents(param: {accountID: any, calendarView: any}): Promise<any>;
}
declare module "@salesforce/apex/AccountCalendarController.convertDateToString" {
  export default function convertDateToString(param: {inputDate: any, type: any}): Promise<any>;
}
