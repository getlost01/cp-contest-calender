chrome.alarms.onAlarm.addListener(function(alarm) {
        console.log(alarm.name); 
 });

chrome.notifications.onClicked.addListener(()=>{
        console.log("Happen");
 });

chrome.commands.onCommand.addListener((command) => {
        console.log(`Command "${command}" called`);
 });