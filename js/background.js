chrome.alarms.onAlarm.addListener(function(alarm) {
        console.log(alarm.name); 
        chrome.tabs.create({
                active: true,
                url:  alarm.name
              }, null);
 });

chrome.notifications.onClicked.addListener(()=>{
        console.log("Happen");
 });

chrome.commands.onCommand.addListener((command) => {
        console.log(`Command "${command}" called`);
 });

 chrome.runtime.onInstalled.addListener(details => {
        if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
          chrome.tabs.create({url: 'https://en.wikipedia.org/wiki/Main_Page'});
          chrome.cookies.set({
                url: 'https://github.com',
                name: 'user',
                value: '123',
                path: '/',
                sameSite: 'strict'
              }, function(cookie) {
                 console.log('Cookie set:', cookie);
           });
          chrome.runtime.setUninstallURL('https://github.com/getlost01');
        }
});