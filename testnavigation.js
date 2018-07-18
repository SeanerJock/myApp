import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

registerScreens(); // this is where you register all of your app's screens
// Navigation.startSingleScreenApp({
//     screen:{
//         screen:'navigation.FirstTabScreen',
//         title:'home'
//     },
//      drawer:{
//          left:{
//              screen:'navigation.SecondTabScreen',
//              disableOpenGesture: false,
//              fixedWidth:700
//          },
//          disableOpenGesture: true
//      },
//     animationType: 'fade'

// })


Navigation.startTabBasedApp({
    tabs: [
        {
            label: 'One',
            screen: 'navigation.FirstTabScreen', // this is a registered name for a screen
            icon: require('./img/select.png'),
            selectedIcon: require('./img/unselect.png'), // iOS only
            title: 'Screen One',
            titleImage: require('./img/select.png'),
            navigatorStyle: {

            },
            navigatorButtons: {}
        },
        {
            label: 'Two',
            screen: 'navigation.SecondTabScreen',
            icon: require('./img/select.png'),
            selectedIcon: require('./img/unselect.png'), // iOS only
            title: 'Screen Two'
        }
    ],
    tabsStyle: {
        tabBarButtonColor: '#985612',
        tabBarSelectedButtonColor: '#784532',
        tabBarBackgroundColor: '#000000',
        initialTabIndex: 1
    },
    appStyle: {
        orientation: 'portrait', // Sets a specific orientation to the entire app. Default: 'auto'. Supported values: 'auto', 'landscape', 'portrait'
        bottomTabBadgeTextColor: '#000000', // Optional, change badge text color. Android only
        bottomTabBadgeBackgroundColor: '#985667', // Optional, change badge background color. Android only
        backButtonImage: require('./img/select.png'), // Change the back button default arrow image with provided image. iOS only
        hideBackButtonTitle: true // Hide back button title. Default is false. If `backButtonTitle` provided so it will take into account and the `backButtonTitle` value will show. iOS only
    },
    animationType: 'fade'
});