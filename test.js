import { StackNavigator } from 'react-navigation';
import Leading from './testView/Leading';
import Home from './testView/home';
import { Button } from 'react-native'
import React from 'react'
// 定义一个StackNavigator
const App = StackNavigator({
    Leading: { screen: Leading },
    Home: { screen: Home }
}, {
        initialRouteName: 'Leading',
        navigationOptions: {
            title: '标题1'
            // cardStack: {
            //     gesturesEnabled: true
            // },
            // headerBackTitle: '返回',
            // headerTintColor: '#897612',
            // headerRight: (<Button
            //     onPress={() => alert('This is a button!')}
            //     title="分享"
            //     color="#124312"
            // />),
            

        },
        mode: 'card',
        headerMode: 'screen',
        cardStyle: {
            flex: 1
        }
    })

export default App;
