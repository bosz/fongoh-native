import PushNotification from 'react-native-push-notification';
import { PushNotificationIOS } from 'react-native';

const configure = () => {
 PushNotification.configure({

   onRegister: function(token) {
     //process token
   },

   onNotification: function(notification) {
     // process the notification
     // required on iOS only
     notification.finish(PushNotificationIOS.FetchResult.NoData);
   },

   permissions: {
     alert: true,
     badge: true,
     sound: true
   },

   popInitialNotification: true,
   requestPermissions: true,

 });
};

const localNotification = (title="fongoh, try me") => {
 PushNotification.localNotification({
   autoCancel: true,
   largeIcon: "ic_launcher",
   smallIcon: "ic_notification",
   bigText: "Fongoh, your insanity is just what the world needs. Keep making more people insane.",
   subText: "You the best",
   color: "green",
   vibrate: true,
   vibration: 300,
   title: title,
   message: "I really love the cray work",
   playSound: true,
   soundName: 'default',
   actions: '["Accept", "Reject"]',
 });
};



export {
  localNotification,
  configure,
};