import React, { Component } from 'react'
import {
    View,
    Text
} from 'react-native'
export default class SecondTabScreen extends Component {
    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>我的SecondTabScreen页面</Text>
            </View>
        )
    }
}