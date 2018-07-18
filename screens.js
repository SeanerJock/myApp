import { Navigation } from 'react-native-navigation';

import FirstTabScreen from './navigation/FirstTabScreen';
import SecondTabScreen from './navigation/SecondTabScreen';
import PushedScreen from './navigation/PushedScreen';

export function registerScreens() {
    Navigation.registerComponent('navigation.FirstTabScreen', () => FirstTabScreen);
    Navigation.registerComponent('navigation.SecondTabScreen', () => SecondTabScreen);
    Navigation.registerComponent('navigation.PushedScreen', () => PushedScreen);
}