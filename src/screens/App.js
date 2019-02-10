import React, {Component} from 'react';
import HomeScrn from './HomeScrn';
import OneSignal from 'react-native-onesignal'; 

import { PushNotifications } from './../services';

PushNotifications.configure();

export default class App extends Component<Props> {
	constructor(props) {
	  super(props);
		OneSignal.init("e64287e9-2f24-4575-943f-9e70bedd3cf1");

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
	  this.state = {};
	}

	componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.warn("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.warn('Message: ', openResult.notification.payload.body);
    console.warn('Data: ', openResult.notification.payload.additionalData);
    console.warn('isActive: ', openResult.notification.isAppInFocus);
    console.warn('openResult: ', openResult);
  }

  onIds(device) {
    console.warn('Device info: ', device);
  }

  render() {
    return (
      <HomeScrn />
    );
  }
}
