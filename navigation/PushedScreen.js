import React, { Component } from 'react'
import {
    View,
    Text,
    Button
} from 'react-native'
export default class PushedScreen extends Component {
    constructor(props){
        super(props)
        // this.props.navigator.toggleTabs({
        //     to: 'hidden', // required, 'hidden' = hide tab bar, 'shown' = show tab bar
        //     animated: true // does the toggle have transition animation or does it happen immediately (optional)
        //   });

    }
    render() {
        return (
            <View>
                <Text>我的PushedScreen页面</Text>
                <Button onPress={() => {
                    // this.props.navigator.resetTo({
                    //     screen: 'navigation.SecondTabScreen',
                    //     title: 'second title',
                    //     animated: true,
                    //     animationType: 'slide-horizontal'
                    // })
                    this.props.navigator.toggleNavBar({
                        to: 'hidden', // required, 'hidden' = hide navigation bar, 'shown' = show navigation bar
                        animated: false // does the toggle have transition animation or does it happen immediately (optional). By default animated: true
                      });
                    // this.props.navigator.push({
                    //     screen: 'navigation.FirstTabScreen',
                    //     title: 'first'
                    //   })
                }} title="弹出通知" />
            </View>
        )
    }
}