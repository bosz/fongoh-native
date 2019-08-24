/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry, AsyncStorage} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import Parse from 'parse/react-native';
// import ParseReact from 'parse-react/react-native';

Parse.setAsyncStorage(AsyncStorage)
Parse.initialize('motowa');
Parse.serverURL = 'http://localhost:1337/parse'

AppRegistry.registerComponent(appName, () => App);
