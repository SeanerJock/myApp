import React, { Component } from 'react'
import { Navigation } from 'react-native-navigation'
import {
    View,
    Text,
    Button,
    ToastAndroid
} from 'react-native'

export default class FirstTabScreen extends Component {
    static navigatorStyle = {
        drawUnderNavBar: false,
        navBarTranslucent: false
      }
    render() {
        return (
            <View>
                <Text>我的FirstTabScreen页面</Text>
                <Button onPress={() => {
                    //const visibleScreenInstanceId =  Navigation.getCurrentlyVisibleScreenId()
                    //ToastAndroid.show(visibleScreenInstanceId+'',ToastAndroid.SHORT)
                    // Navigation.showLightBox({
                    //     screen: 'navigation.SecondTabScreen', // unique ID registered with Navigation.registerScreen
                    //     style: {
                    //         backgroundBlur: 'dark', // 'dark' / 'light' / 'xlight' / 'none' - the type of blur on the background
                    //         //backgroundColor: '#ff000080', // tint color for the background, you can specify alpha here (optional)
                    //         tapBackgroundToDismiss: false // dismisses LightBox on background taps (optional)
                    //       }
                    // })
                    this.props.navigator.push({
                        screen: 'navigation.PushedScreen',
                        title: 'Pushed Screen',
                        animationType: 'slide-horizontal',
                        passProps: {
                            info: '123211'
                        }
                    })
                }} title="跳转" />
            </View>
        )
    }
}