/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import Index from './app/index';
import {name as appName} from './app.json';
console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => Index);
