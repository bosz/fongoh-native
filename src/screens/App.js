import React, {Component} from 'react';
import HomeScrn from './HomeScrn';
import PushNotification from 'react-native-push-notification';

import { PushNotifications } from './../services';

PushNotifications.configure();

export default class App extends Component<Props> {
  render() {
    return (
      <HomeScrn />
    );
  }
}
